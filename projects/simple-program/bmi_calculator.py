def calculate_bmi(weight_kg, height_m):
    return weight_kg / (height_m ** 2)


def classify_bmi(bmi_value):
    if bmi_value < 18.5:
        return "Underweight"
    if bmi_value < 25:
        return "Normal weight"
    if bmi_value < 30:
        return "Overweight"
    return "Obese"


def read_positive_number(prompt):
    while True:
        try:
            value = float(input(prompt))
            if value <= 0:
                print("Please enter a number greater than zero.")
                continue
            return value
        except ValueError:
            print("Invalid input. Please enter a numeric value.")


def main():
    print("BMI Calculator")
    print("-" * 14)

    weight = read_positive_number("Enter your weight in kilograms: ")
    height = read_positive_number("Enter your height in meters: ")

    bmi_value = calculate_bmi(weight, height)
    category = classify_bmi(bmi_value)

    print(f"\nYour BMI is {bmi_value:.2f}")
    print(f"Category: {category}")


if __name__ == "__main__":
    main()
