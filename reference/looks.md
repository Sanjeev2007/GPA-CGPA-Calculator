That's a great approach for finalizing your design assets! Based on the image you provided, here is a breakdown of the specific color codes and design properties for the main components of your SVCE GPA Predictor website.

## 🎨 Color Palette & Typography

The design uses a clean, professional, and high-contrast palette.

| Element/Color Use | Color Code (Hex) | Notes |
| :--- | :--- | :--- |
| **Primary Background** (Page Background) | $\mathbf{\#\text{F5F9FA}}$ | Very light off-white/pale blue, giving a clean, fresh feel. |
| **Card Background** (Calculator/Tracker Boxes) | $\mathbf{\#\text{FFFFFF}}$ | Pure white for the main content areas, creating contrast. |
| **Primary Text/Labels** | $\mathbf{\#\text{333333}}$ or $\mathbf{\#\text{000000}}$ | Dark gray/Black for high readability of titles and input labels. |
| **Primary Accent Color (Navy)** | $\mathbf{\#\text{1A237E}}$ (Approx.) | Used for the main header text, logo/icon, and box shadows. |
| **Secondary Accent Color (Teal/Cyan)** | $\mathbf{\#\text{00BCD4}}$ (Approx.) | Used for the "Predict" button and the active "+ Add Semester" link. |
| **Success Color (Green)** | $\mathbf{\#\text{4CAF50}}$ (Approx.) | Used for the successful result: "Grade Point: 9.0". |
| **Button/Input Border** | $\mathbf{\#\text{CCCCCC}}$ or $\mathbf{\#\text{DDDDDD}}$ | Light gray for subtle visual separation of input fields. |
| **Placeholder Text** | $\mathbf{\#\text{AAAAAA}}$ (Approx.) | Light gray text visible inside empty input fields. |
| **Typography** | **Sans-serif** (e.g., Roboto, Arial, or similar modern sans-serif) | Clean, digital look for headings and body text. |

***

## 📐 Component Styling Breakdown

### 1. Main Containers (Cards)

The central elements ("Subject GPA Calculator," "Goal Predictor," etc.) are contained in soft, elevated white boxes.

* **Background:** $\mathbf{\#\text{FFFFFF}}$ (White)
* **Border:** None or very subtle $\mathbf{\#\text{DDDDDD}}$ (Light Gray)
* **Shadow (Key Feature):** A subtle box shadow to lift the card off the pale blue background.
    * `box-shadow: 0px 4px 8px rgba(26, 35, 126, 0.1);` (Subtle shadow using the Navy primary color with low opacity).

### 2. Primary Button ("Calculate")

* **Background Color:** $\mathbf{\#\text{1A237E}}$ (Primary Navy Accent)
* **Text Color:** $\mathbf{\#\text{FFFFFF}}$ (White)
* **Border:** None
* **Padding/Size:** Adequate padding for easy clicking (e.g., `10px` vertical, `20px` horizontal).
* **Border Radius:** Slightly rounded corners (e.g., `4px`).

### 3. Secondary Button ("Predict") & Links

* **Background Color (Predict):** $\mathbf{\#\text{00BCD4}}$ (Secondary Teal Accent)
* **Background Color (Add Semester):** Transparent
* **Text Color:** $\mathbf{\#\text{00BCD4}}$ (Teal)
* **Icon:** The plus icon for "Add Semester" should match the Teal text color.

### 4. Input Fields

* **Background:** $\mathbf{\#\text{FFFFFF}}$ (White)
* **Border:** Thin light gray border (e.g., `1px solid #DDDDDD`).
* **Width:** Varies (e.g., $100\%$ width for labels, or set width for value inputs).

### 5. Result Displays

| Component | Text Color | Font Size / Weight |
| :--- | :--- | :--- |
| **"Grade Point (GPA)" Label** | Dark Gray/Black | Normal weight, standard size. |
| **"Grade Point: 9.0" Value** | **$\mathbf{\#\text{4CAF50}}$ (Success Green)** | **Large, Bold** (This is the most visually dominant element). |
| **"Letter Grade: A+"** | Dark Gray/Black | Normal weight, slightly smaller than the GPA value. |
| **"Current CGPA: 8.35"** | Dark Gray/Black | **Bold** |
| **"Equivalent Percentage: 78.5%"** | Dark Gray/Black | **Bold** |

### 6. Footer Information Panel

* **Structure:** Minimal padding, often separated by thin vertical lines or a different background color from the main page.
* **Text:** Smaller font size, using the primary dark gray color.