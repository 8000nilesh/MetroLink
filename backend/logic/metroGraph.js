const graph = {

    // =========================
    // BLUE LINE
    // =========================

    "Dwarka": [
        { station: "Janakpuri West", distance: 2.2, line: "Blue" }
    ],

    "Janakpuri West": [
        { station: "Dwarka", distance: 2.2, line: "Blue" },
        { station: "Rajouri Garden", distance: 2.1, line: "Blue" }
    ],

    "Rajouri Garden": [
        { station: "Janakpuri West", distance: 2.1, line: "Blue" },
        { station: "Kirti Nagar", distance: 1.8, line: "Blue" },

        // Pink Line
        { station: "Shakurpur", distance: 2.0, line: "Pink" },
        { station: "Naraina Vihar", distance: 2.0, line: "Pink" }
    ],

    "Kirti Nagar": [
        { station: "Rajouri Garden", distance: 1.8, line: "Blue" },
        { station: "Karol Bagh", distance: 2.4, line: "Blue" }
    ],

    "Karol Bagh": [
        { station: "Kirti Nagar", distance: 2.4, line: "Blue" },
        { station: "Rajiv Chowk", distance: 2.3, line: "Blue" }
    ],

    "Rajiv Chowk": [
        { station: "Karol Bagh", distance: 2.3, line: "Blue" },
        { station: "Supreme Court", distance: 1.7, line: "Blue" },

        // Yellow Line
        { station: "New Delhi", distance: 1.2, line: "Yellow" },
        { station: "Delhi Haat - INA", distance: 3.9, line: "Yellow" }
    ],

    "Supreme Court": [
        { station: "Rajiv Chowk", distance: 1.7, line: "Blue" },
        { station: "Yamuna Bank", distance: 2.1, line: "Blue" }
    ],

    "Yamuna Bank": [
        { station: "Supreme Court", distance: 2.1, line: "Blue" },
        { station: "Vaishali", distance: 2.3, line: "Blue" },
        { station: "Sector 52", distance: 2.5, line: "Blue" }
    ],

    "Vaishali": [
        { station: "Yamuna Bank", distance: 2.3, line: "Blue" }
    ],

    "Sector 52": [
        { station: "Yamuna Bank", distance: 2.5, line: "Blue" }
    ],



    // =========================
    // YELLOW LINE
    // =========================

    "Samaypur Badli": [
        { station: "Haiderpur Badli Mor", distance: 2.0, line: "Yellow" }
    ],

    "Haiderpur Badli Mor": [
        { station: "Samaypur Badli", distance: 2.0, line: "Yellow" },
        { station: "Azadpur", distance: 1.9, line: "Yellow" }
    ],

    "Azadpur": [
        { station: "Haiderpur Badli Mor", distance: 1.9, line: "Yellow" },
        { station: "Kashmere Gate", distance: 2.4, line: "Yellow" },

        // Pink
        { station: "Shalimar Bagh", distance: 1.8, line: "Pink" }
    ],

    "Kashmere Gate": [
        { station: "Azadpur", distance: 2.4, line: "Yellow" },
        { station: "New Delhi", distance: 2.5, line: "Yellow" },

        // Red
        { station: "Shastri Nagar", distance: 1.7, line: "Red" },
        { station: "Welcome", distance: 2.4, line: "Red" }
    ],

    "New Delhi": [
        { station: "Kashmere Gate", distance: 2.5, line: "Yellow" },
        { station: "Rajiv Chowk", distance: 1.2, line: "Yellow" }
    ],

    "Delhi Haat - INA": [
        { station: "Rajiv Chowk", distance: 3.9, line: "Yellow" },
        { station: "AIIMS", distance: 1.2, line: "Yellow" },

        // Pink
        { station: "Lajpat Nagar", distance: 2.2, line: "Pink" }
    ],

    "AIIMS": [
        { station: "Delhi Haat - INA", distance: 1.2, line: "Yellow" },
        { station: "Hauz Khas", distance: 2.0, line: "Yellow" }
    ],

    "Hauz Khas": [
        { station: "AIIMS", distance: 2.0, line: "Yellow" },
        { station: "Chhatarpur", distance: 2.3, line: "Yellow" }
    ],

    "Chhatarpur": [
        { station: "Hauz Khas", distance: 2.3, line: "Yellow" },
        { station: "Saket", distance: 1.6, line: "Yellow" }
    ],

    "Saket": [
        { station: "Chhatarpur", distance: 1.6, line: "Yellow" },
        { station: "HUDA City Centre", distance: 2.5, line: "Yellow" }
    ],

    "HUDA City Centre": [
        { station: "Saket", distance: 2.5, line: "Yellow" }
    ],
        // =========================
    // RED LINE
    // =========================

    "Rithala": [
        { station: "NSP", distance: 2.2, line: "Red" }
    ],

    "NSP": [
        { station: "Rithala", distance: 2.2, line: "Red" },
        { station: "Inderlok", distance: 2.0, line: "Red" },

        // Pink Line
        { station: "Shalimar Bagh", distance: 1.7, line: "Pink" },
        { station: "Shakurpur", distance: 1.5, line: "Pink" }
    ],

    "Inderlok": [
        { station: "NSP", distance: 2.0, line: "Red" },
        { station: "Shastri Nagar", distance: 1.4, line: "Red" }
    ],

    "Shastri Nagar": [
        { station: "Inderlok", distance: 1.4, line: "Red" },
        { station: "Kashmere Gate", distance: 2.0, line: "Red" }
    ],

    "Welcome": [
        { station: "Kashmere Gate", distance: 2.4, line: "Red" },
        { station: "New Bus Adda", distance: 2.5, line: "Red" },

        // Pink
        { station: "Karkarduma", distance: 1.8, line: "Pink" },
        { station: "Maujpur Babarpur", distance: 1.5, line: "Pink" }
    ],

    "New Bus Adda": [
        { station: "Welcome", distance: 2.5, line: "Red" }
    ],



    // =========================
    // PINK LINE
    // =========================

    "Shalimar Bagh": [
        { station: "Azadpur", distance: 1.8, line: "Pink" },
        { station: "NSP", distance: 1.7, line: "Pink" }
    ],

    "Shakurpur": [
        { station: "NSP", distance: 1.5, line: "Pink" },
        { station: "Rajouri Garden", distance: 2.0, line: "Pink" }
    ],

    "Naraina Vihar": [
        { station: "Rajouri Garden", distance: 2.0, line: "Pink" },
        { station: "Delhi Cantt", distance: 1.9, line: "Pink" }
    ],

    "Delhi Cantt": [
        { station: "Naraina Vihar", distance: 1.9, line: "Pink" },
        { station: "INA", distance: 3.2, line: "Pink" }
    ],

    "INA": [
        { station: "Delhi Cantt", distance: 3.2, line: "Pink" },
        { station: "Lajpat Nagar", distance: 2.1, line: "Pink" },

        // Yellow
        { station: "AIIMS", distance: 1.2, line: "Yellow" }
    ],

    "Lajpat Nagar": [
        { station: "INA", distance: 2.1, line: "Pink" },
        { station: "Mayur Vihar Phase 1", distance: 3.1, line: "Pink" }
    ],

    "Mayur Vihar Phase 1": [
        { station: "Lajpat Nagar", distance: 3.1, line: "Pink" },
        { station: "Anand Vihar ISBT", distance: 2.3, line: "Pink" }
    ],

    "Anand Vihar ISBT": [
        { station: "Mayur Vihar Phase 1", distance: 2.3, line: "Pink" },
        { station: "Karkarduma", distance: 1.4, line: "Pink" }
    ],

    "Karkarduma": [
        { station: "Anand Vihar ISBT", distance: 1.4, line: "Pink" },
        { station: "Welcome", distance: 1.8, line: "Pink" }
    ],

    "Maujpur Babarpur": [
        { station: "Welcome", distance: 1.5, line: "Pink" }
    ]

};
module.exports=graph;