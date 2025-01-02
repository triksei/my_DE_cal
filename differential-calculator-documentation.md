# Differential Calculator - Technical Documentation

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [HTML Structure](#html-structure)
4. [CSS Styling](#css-styling)
5. [JavaScript Functionality](#javascript-functionality)
6. [Mathematical Functions](#mathematical-functions)
7. [User Interface Components](#user-interface-components)
8. [Responsive Design](#responsive-design)

## Overview
The Differential Calculator is a web application designed to solve growth/decay and Newton's cooling/heating mathematical problems. The project consists of three main files: `index.html`, `style.css`, and `script.js`. The application offers four main calculators:
- Population Growth Calculator
- Radium Decay Calculator
- Newton's Law of Cooling Calculator
- Newton's Law of Heating Calculator

## Project Structure

### File Organization
```
differential-calculator/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
└── script.js          # JavaScript functionality
```

## HTML Structure

### Key Components

1. **Meta Tags**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- UTF-8 encoding ensures proper character rendering
- Viewport meta tag enables responsive design

2. **Main Sections**
- Welcome Section (`welcome-section`)
- Growth and Decay Calculator (`growth-decay-section`)
- Newton's Law Calculator (`newton-section`)

3. **Calculator Components**
Each calculator section contains:
- Input fields for parameters
- Dropdown selectors for calculation type
- Calculate buttons
- Result display areas

## CSS Styling

### Theme Colors
- Primary Purple: `#9356A0`
- Secondary Purple: `#724C9D`
- Background Gradient: `#F3E5FF` to `#E5D0FF`
- White: `#FFFFFF`

### Key Styling Features

1. **Background**
```css
background-color: #F3E5FF;
background-image: linear-gradient(45deg, #F3E5FF 0%, #E5D0FF 100%);
```
- Creates a soft purple gradient background

2. **Card Design**
```css
.card {
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(147, 86, 160, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```
- Implements material design principles
- Includes hover animations
- Uses soft shadows for depth

3. **Form Elements**
```css
input[type="number"],
input[type="text"] {
    width: 100%;
    max-width: 300px;
    padding: 12px;
    border-radius: 8px;
}
```
- Consistent styling across input fields
- Responsive width constraints
- Custom focus states

4. **Custom Scrollbar**
```css
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    background: #9356A0;
    border-radius: 4px;
}
```
- Themed scrollbar design
- Smooth scrolling experience

## JavaScript Functionality

### Navigation Functions

1. **Section Toggle Functions**
```javascript
function showWelcomeSection() {
    document.getElementById('growth-decay-section').classList.add('hidden');
    document.getElementById('newton-section').classList.add('hidden');
    document.getElementById('welcome-section').classList.remove('hidden');
}
```
- Manages visibility of main sections
- Uses CSS classes for smooth transitions

### Calculator Functions

1. **Population Growth Calculator**
```javascript
function calculatePopulation() {
    // Get input values
    const P0 = parseFloat(document.getElementById('P0').value);
    const P1 = parseFloat(document.getElementById('P1').value);
    const t1 = parseFloat(document.getElementById('t1').value);
    const P2 = parseFloat(document.getElementById('P2').value);

    // Calculate growth constant
    const k = Math.log(P1 / P0) / t1;
    
    // Calculate future population
    const P_req = P0 * Math.exp(k * P2);
    
    // Calculate growth rate
    const growthRate = k * P_req;
}
```

2. **Radium Decay Calculator**
```javascript
function calculateRadium() {
    // Calculate decay constant
    const k = Math.log(Q1 / Q0) / t1;
    
    // Calculate future amount
    const Q_req = Q0 * Math.exp(k * t2);
    
    // Calculate half-life
    const halfLife = Math.log(2) / Math.abs(k);
}
```

3. **Newton's Law Calculators**
```javascript
function calculateCooling() {
    // Calculate temperature difference constant
    const C = T0 - Tm;
    
    // Calculate cooling constant
    const k = Math.log((T1 - Tm) / C) / t1;
    
    // Calculate temperature at requested time
    const T_req = Tm + C * Math.exp(k * tReq);
}
```

## Mathematical Functions

### Growth and Decay Equations
1. **Population Growth**
- Growth Rate Equation: `dP/dt = kP`
- Solution: `P(t) = P0 * e^(kt)`
- Growth Constant: `k = ln(P1/P0) / t1`

2. **Radium Decay**
- Decay Equation: `dQ/dt = -kQ`
- Solution: `Q(t) = Q0 * e^(-kt)`
- Half-life: `t1/2 = ln(2)/k`

### Newton's Law Equations
1. **Cooling/Heating**
- Rate Equation: `dT/dt = k(T - Tm)`
- Solution: `T(t) = Tm + (T0 - Tm)e^(kt)`
- Time to Temperature: `t = ln((T - Tm)/(T0 - Tm))/k`

## User Interface Components

### Input Validation
- All numerical inputs use `type="number"`
- Required fields prevent empty submissions
- ParseFloat used for numerical conversion

### Result Display
```javascript
const result = `
    <h4>Solutions:</h4>
    <p>Step 1: ${step1}</p>
    <p>Step 2: ${step2}</p>
    <p>Step 3: ${step3}</p>
    <h4>Final Result:</h4>
    <p>${finalResult}</p>
`;
```
- Step-by-step solution display
- Formatted with proper units
- Scrollable results section

## Responsive Design

### Media Queries
```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    
    .left-box, .right-box {
        width: 90%;
    }
    
    h1 {
        font-size: 48px;
    }
}
```

### Flexible Layouts
- Fluid containers with max-width constraints
- Responsive font sizes
- Mobile-friendly input fields
- Scrollable sections for overflow content

### Accessibility Features
- Proper contrast ratios
- Clear label associations
- Responsive text sizing
- Touch-friendly button sizes

This documentation provides a comprehensive overview of the Differential Calculator's implementation. For specific modifications or additional features, refer to the individual code files and their corresponding sections in this document.
