import inquirer from "inquirer";

function calculateShippingCost(ShippingMethod: string): string | number {
    switch (ShippingMethod) {
        case "Standard":
            return 5.00;
        case "Express":
            return 10.00;
        case "Overnight":
            return 20.00;
        default:
            return "Invalid shipping method";
    }
}

async function shipping() {
    const { method } = await inquirer.prompt({
        name: "method",
        type: "list",
        message: "Select a shipping method:",
        choices: ["Standard", "Express", "Overnight"],
    });
    console.log(`Your Shipping Method is ${method}, Cost: $${calculateShippingCost(method)}`);
}

shipping();
