export const config = {
  name: { requiredMessage: "Name is required" },
  email: {
    requiredMessage: "Email is required",
    invalidLength: "Invalid Email Length",
    invalidEmailType: "Invalid Email",
  },
  budget: {
    negativeBudget: "Negative Budget not allowed",
    maxBudget: "Invalid Budget Amount",
    minBudget: "Invalid Budget Amount",
  },
  message: {
    requiredMessage: "Message is required",
    minimumMessage: "Minimum 100 message length required",
    maximumMessage: "Maximum 1000 limit reached",
  },
};
export const formConfigValues = {
  name: { minLength: 10, maxLength: 20 },
  email: { emailMaxLength: 50 },
  message: { minMessageLength: 100, maxMessageLength: 1000 },
  budgetAmount: { minBudget: 1000, maxBudget: 999999 },
};
