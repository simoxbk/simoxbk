document.addEventListener('DOMContentLoaded', function() {
    const deviceForm = document.getElementById('deviceForm');
    const searchTypeSelect = document.getElementById('searchType');
    const phoneGroup = document.getElementById('phoneGroup');
    const deviceGroup = document.getElementById('deviceGroup');
    const phoneInput = document.getElementById('phoneNumber');
    const deviceInput = document.getElementById('deviceId');

    if (searchTypeSelect) {
        searchTypeSelect.addEventListener('change', function() {
            const selectedType = this.value;
            
            if (selectedType === 'phone') {
                phoneGroup.classList.remove('hidden');
                deviceGroup.classList.add('hidden');
                phoneInput.setAttribute('required', 'required');
                deviceInput.removeAttribute('required');
                deviceInput.value = '';
            } else {
                deviceGroup.classList.remove('hidden');
                phoneGroup.classList.add('hidden');
                deviceInput.setAttribute('required', 'required');
                phoneInput.removeAttribute('required');
                phoneInput.value = '';
            }
        });

        phoneInput.setAttribute('required', 'required');
    }

    if (deviceForm) {
        deviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchType = searchTypeSelect.value;
            let identifier = '';
            let isValid = true;
            
            if (searchType === 'phone') {
                identifier = phoneInput.value.trim();
                
                if (!identifier) {
                    showError(phoneInput, 'Please enter a phone number');
                    isValid = false;
                } else if (!validatePhoneNumber(identifier)) {
                    showError(phoneInput, 'Please enter a valid phone number');
                    isValid = false;
                } else {
                    clearError(phoneInput);
                }
            } else {
                identifier = deviceInput.value.trim();
                
                if (!identifier) {
                    showError(deviceInput, 'Please enter a device ID');
                    isValid = false;
                } else if (!validateDeviceId(identifier)) {
                    showError(deviceInput, 'Please enter a valid device ID');
                    isValid = false;
                } else {
                    clearError(deviceInput);
                }
            }
            
            if (isValid) {
                const maskedIdentifier = maskIdentifier(identifier, searchType);
                
                const submitButton = deviceForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.innerHTML = '<span class="btn-text">Processing...</span>';
                
                setTimeout(function() {
                    window.location.href = `results.html?type=${searchType}&id=${encodeURIComponent(maskedIdentifier)}`;
                }, 800);
            }
        });
    }

    function validatePhoneNumber(phone) {
        const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    }

    function validateDeviceId(deviceId) {
        const deviceIdRegex = /^[A-Za-z0-9\-]{8,}$/;
        return deviceIdRegex.test(deviceId);
    }

    function maskIdentifier(identifier, type) {
        if (type === 'phone') {
            const cleaned = identifier.replace(/\D/g, '');
            if (cleaned.length >= 10) {
                const lastFour = cleaned.slice(-4);
                return '***-***-' + lastFour;
            }
            return identifier;
        } else {
            if (identifier.length >= 8) {
                const lastFour = identifier.slice(-4);
                return '****-****-' + lastFour;
            }
            return identifier;
        }
    }

    function showError(input, message) {
        clearError(input);
        
        input.style.borderColor = '#ef4444';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        input.parentElement.appendChild(errorDiv);
        
        input.focus();
    }

    function clearError(input) {
        input.style.borderColor = '';
        
        const errorMessage = input.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            clearError(this);
        });
    });

    const phoneNumberInput = document.getElementById('phoneNumber');
    if (phoneNumberInput) {
        phoneNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^\d\+\-\(\)\s]/g, '');
            e.target.value = value;
        });
    }

    const deviceIdInput = document.getElementById('deviceId');
    if (deviceIdInput) {
        deviceIdInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^A-Za-z0-9\-]/g, '');
            e.target.value = value.toUpperCase();
        });
    }
});
