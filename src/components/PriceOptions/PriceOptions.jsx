import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
      {
        id: 1,
        name: "Basic Membership",
        price: 30.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open 5 days a week",
          "Free Wi-Fi",
          "Initial fitness assessment",
        ],
      },
      {
        id: 2,
        name: "Standard Membership",
        price: 50.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open 7 days a week",
          "1 personal training session per month",
          "Free Wi-Fi",
          "Discount on merchandise",
        ],
      },
      {
        id: 3,
        name: "Premium Membership",
        price: 75.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open 7 days a week",
          "Weekly personal training sessions",
          "Unlimited group fitness classes",
          "Access to sauna and spa facilities",
        ],
      },
      {
        id: 4,
        name: "Family Membership",
        price: 120.0,
        features: [
          "Access to gym equipment for 4 family members",
          "Locker room access",
          "Open 7 days a week",
          "2 personal training sessions per month",
          "Access to family events and activities",
          "Childcare services",
        ],
      },
      {
        id: 5,
        name: "Student Membership",
        price: 20.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open 7 days a week",
          "Discounted personal training sessions",
          "Student-only fitness events",
        ],
      },
      {
        id: 6,
        name: "Senior Membership",
        price: 25.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open 5 days a week",
          "Access to senior fitness classes",
          "Discount on merchandise",
        ],
      },
      {
        id: 7,
        name: "Off-Peak Membership",
        price: 20.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Access during off-peak hours",
          "Free Wi-Fi",
          "Initial fitness assessment",
        ],
      },
      {
        id: 8,
        name: "Weekend Warrior Membership",
        price: 35.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open on weekends only",
          "Free Wi-Fi",
          "Initial fitness assessment",
          "Access to weekend group fitness classes",
        ],
      },
      {
        id: 9,
        name: "Corporate Membership",
        price: 100.0,
        features: [
          "Access to gym equipment for employees",
          "Locker room access",
          "Open 7 days a week",
          "Monthly wellness workshops",
          "Discount on merchandise",
          "Priority support",
        ],
      },
      {
        id: 10,
        name: "VIP Membership",
        price: 150.0,
        features: [
          "Access to all gym facilities",
          "Private locker room access",
          "Open 7 days a week",
          "Daily personal training sessions",
          "Unlimited access to group fitness classes",
          "Monthly massage therapy session",
          "Complimentary guest passes",
        ],
      },
      {
        id: 11,
        name: "Seasonal Membership",
        price: 200.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open 7 days a week",
          "Valid for 3 months",
          "Free Wi-Fi",
          "Initial fitness assessment",
          "Discount on merchandise",
        ],
      },
      {
        id: 12,
        name: "Military Membership",
        price: 40.0,
        features: [
          "Access to gym equipment",
          "Locker room access",
          "Open 7 days a week",
          "Discount on merchandise",
          "Access to wellness seminars",
          "Discount on personal training sessions",
        ],
      },
    ];

    return (
        <div className="mx-12 my-6">
            <h2 className="text-3xl text-center font-extrabold bg-cyan-400 p-6 mb-6 ">Best Prices in Town :</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;