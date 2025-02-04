# Project Allocation

## Overview

This project addresses the stable matching problem, specifically in the context of allocating students to projects based on their preferences. The goal is to maximize overall utility by ensuring that students are matched to projects they prefer, while maintaining stability in the allocation.

## Stable Matching Problem

The stable matching problem involves finding a stable match between two sets of elements given a set of preferences for each element. A match is considered stable if there are no two elements that would prefer each other over their current matches.

In this project, we focus on matching students to projects. Each student ranks their preferred projects, and the algorithm aims to allocate projects to students in a way that maximizes overall satisfaction and ensures stability.

## Solution Approach

1. **Preference Collection**: Students submit their ranked preferences for available projects.
2. **Algorithm Execution**: We implement a stable matching algorithm (such as the Gale-Shapley algorithm) to process the preferences and generate a stable match.
3. **Utility Maximization**: The algorithm ensures that the allocation maximizes the overall utility by considering the preferences of all students.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/project-allocation.git
    ```
2. Navigate to the project directory:
    ```bash
    cd project-allocation
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```
4. Start the ReScript development server:
    ```bash
    npm run res:dev
    ```

5. Start the Vite development server:
    ```bash
    npm run dev
    ```

## Contributing

We welcome contributions to improve the project. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [vsrivatsa25@gmail.com](mailto:vsrivatsa25@gmail.com).
