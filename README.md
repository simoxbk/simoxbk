# Device Finder Web Application

A modern, responsive web application for device lookup and tracking simulation.

## Features

- **Homepage with Search Form**
  - Search by Phone Number or Device ID
  - Form validation with real-time feedback
  - Optional email field for updates
  - Clean, modern UI with gradient background

- **Results Page**
  - Success confirmation message
  - Masked identifier display for privacy
  - Auto-generated request ID
  - Timeline showing process steps
  - Action buttons (Search Another Device, Print Results)
  - Help section with support links

- **Responsive Design**
  - Mobile-friendly layout
  - Works on all screen sizes
  - Modern gradient backgrounds
  - Smooth animations and transitions

- **Security & Privacy**
  - Phone numbers and device IDs are masked in results
  - No real tracking or location services
  - Demo/simulation only

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, flexbox, and grid
- **JavaScript**: Form validation and dynamic interactions
- **Google Fonts**: Inter font family

## File Structure

```
/vercel/sandbox/
├── index.html          # Homepage with search form
├── results.html        # Results page with confirmation
├── styles.css          # All styling and responsive design
├── script.js           # Form validation and interactions
└── README.md           # This file
```

## How to Use

1. **Start a Local Server**
   ```bash
   python3 -m http.server 8000
   ```

2. **Open in Browser**
   Navigate to: `http://localhost:8000/index.html`

3. **Search for a Device**
   - Select search type (Phone Number or Device ID)
   - Enter the identifier
   - Optionally add an email address
   - Click "Search Device"

4. **View Results**
   - See the confirmation message
   - Review the masked identifier
   - Check the request ID
   - View the process timeline
   - Search another device or print results

## Form Validation

- **Phone Number**: Must be at least 10 characters, accepts digits, +, -, (), and spaces
- **Device ID**: Must be at least 8 characters, accepts alphanumeric and hyphens
- Real-time validation with error messages
- Input sanitization and formatting

## Design Features

- **Color Scheme**: Purple gradient background with blue accents
- **Typography**: Inter font family for clean, modern look
- **Icons**: Emoji icons for info cards (🔒 Secure, ⚡ Fast, 🌍 Global)
- **Animations**: Smooth transitions, fade-in effects, and SVG animations
- **Accessibility**: Proper labels, semantic HTML, keyboard navigation

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Important Notes

⚠️ **This is a demonstration application only**
- Does NOT implement real device tracking
- Does NOT access telecom or phone location services
- Does NOT store or transmit any data
- All functionality is simulated for demonstration purposes

## Future Enhancements (Not Implemented)

- Backend API integration
- Real database connectivity
- User authentication
- Email notifications
- Device history tracking
- Multi-language support

## License

Demo Application - For demonstration purposes only.

## Contact

For questions or support:
- Email: support@devicefinder.com
- Phone: +1 (555) 000-0000

---

© 2025 Device Finder. All rights reserved. Demo Application.
