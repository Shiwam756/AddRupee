import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define the Mongoose schema
const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  mothername: {
    type: String,
    required: true,
  },
  spousename: String,
  gender: {
    type: String,
    required: true,
  },
  religion: String,
  citizenship: {
    type: String,
    required: true,
  },
  mobileno: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Simple phone number validation (10 digits)
        return /^\d{10}$/.test(value);
      },
      message: "Invalid phone number format",
    },
  },
  AadharCardNo: {
    type: String,
    required: true,
  },
  PanCardNo: {
    type: String,
    required: true,
  },
  personalemailid: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid personal email format",
    },
  },
  officialemailid: {
    type: String,
    validate: {
      validator: function (value) {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid official email format",
    },
  },
  currentAddress: {
    type: String,
    required: true,
  },
  currentCity: {
    type: String,
    required: true,
  },
  currentState: {
    type: String,
    required: true,
  },
  currentPincode: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  permanentCity: {
    type: String,
    required: true,
  },
  permanentState: {
    type: String,
    required: true,
  },
  permanentPincode: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  companyGSTNo: {
    type: String,
    required: true,
  },
  websiteLink: String,
  totalWorkExperience: String,
  companyCity: {
    type: String,
    required: true,
  },
  companyState: {
    type: String,
    required: true,
  },
  companyPincode: {
    type: String,
    required: true,
  },

  reference1name: {
    type: String,
    required: true,
  },
  reference1mobile: {
    type: String,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Invalid reference 1 phone number format",
    },
  },
  reference1pincode: {
    type: String,
    required: true,
  },
  reference1address: {
    type: String,
    required: true,
  },
  reference1city: {
    type: String,
    required: true,
  },
  reference1state: {
    type: String,
    required: true,
  },

  reference2name: {
    type: String,
    required: true,
  },
  reference2mobile: {
    type: String,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Invalid reference 2 phone number format",
    },
  },
  reference2pincode: {
    type: String,
    required: true,
  },
  reference2address: {
    type: String,
    required: true,
  },
  reference2city: {
    type: String,
    required: true,
  },
  reference2state: {
    type: String,
    required: true,
  },

  branchName: {
    type: String,
    required: true,
  },
  termsAndCondition: {
    type: Boolean,
    required: true,
  },
  status: { type: String, default: "pending" },
});

const pEmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  TL_Name: String,
  Branch_Name: String,
  userType: String,
  is_verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: String,
});

// All data Schema
const pFormalDataSchema = new mongoose.Schema({
  Status: String,
  Product_Loan: String,
  Bank_Name: String,
  Customer_Name: String,
  Father_Name: String,
  Mother_Name: String,
  Mobile: String,
  Personal_Email: String,
  Pan_Card: String,
  Customer_Location: String,
  Company_Name: String,
  Dob: String,
  Login_Date: String,
  Gender: String,
  Religion: String,
  Income_Source: String,
  Marital_Status: String,
  Spouse_Name: String,
  Qualification: String,
  Property_Status: String,
  Aadhar_Card_No: String,
  Current_Address_Line1: String,
  Current_Address_Line2: String,
  Current_City: String,
  Current_Landmark: String,
  Current_State: String,
  Current_Pin: String,
  Permanent_Address_Line1: String,
  Permanent_Address_Line2: String,
  Permanent_City: String,
  Permanent_Landmark: String,
  Permanent_State: String,
  Permanent_Pin: String,
  Designation: String,
  Current_Company_Work_Experience: String,
  Total_Work_Experience: String,
  Company_Type: String,
  Official_Mail: String,
  Company_Address: String,
  Company_City: String,
  Company_State: String,
  Company_Pin: String,
  Salary_Account_BankName: String,
  Annual_Ctc: String,
  Net_Salary: String,
  Obligations: String,
  Scheme_Offered: String,
  Loan_Amount_Applied: String,
  Tenure_Of_Loan: String,
  Credit_Card_Obligation: String,
  Reference1_FullName_Relative: String,
  Reference1_MobileNo: String,
  Reference1_Address1: String,
  Reference1_City: String,
  Reference1_State: String,
  Reference1_Pin: String,
  Reference2_FullName_Friend: String,
  Reference2_MobileNo: String,
  Reference2_Address1: String,
  Reference2_City: String,
  Reference2_State: String,
  Reference2_Pin: String,
  Caller_Name: String,
  TL_Name: String,
  Manager_Name: String,
  Disbursal_BankName: String,
  Loan_Application_No: String,
  Approved_Amount: String,
  Disbursal_Loan_Amount: String,
  Inhand_Disb_Account: String,
  Bt_Disb_Amount: String,
  Top_Up: String,
  Cibil: String,
  Tenure_Disbursal: String,
  Roi: String,
  Pf: String,
  Insurance: String,
  Emi: String,
  First_Emi_Date: String,
  Scheme: String,
  Login_Bank: String,
  Disbursal_Date: String,
  Dsa_Channel_Name: String,
  Rejection_Date: String,
  Rejection_Remark: String,
  Rejection_Description: String,
  email: String,
  Upload_Date: {
    type: Date,
    default: Date.now,
  },
});

const pPendingFormSchema = new mongoose.Schema({
  Status: String,
  Product_Loan: String,
  Bank_Name: String,
  Customer_Name: String,
  Father_Name: String,
  Mother_Name: String,
  Mobile: String,
  Personal_Email: String,
  Pan_Card: String,
  Customer_Location: String,
  Company_Name: String,
  Dob: String,
  Login_Date: String,
  Gender: String,
  Religion: String,
  Income_Source: String,
  Marital_Status: String,
  Spouse_Name: String,
  Qualification: String,
  Property_Status: String,
  Aadhar_Card_No: String,
  Current_Address_Line1: String,
  Current_Address_Line2: String,
  Current_City: String,
  Current_Landmark: String,
  Current_State: String,
  Current_Pin: String,
  Permanent_Address_Line1: String,
  Permanent_Address_Line2: String,
  Permanent_City: String,
  Permanent_Landmark: String,
  Permanent_State: String,
  Permanent_Pin: String,
  Designation: String,
  Current_Company_Work_Experience: String,
  Total_Work_Experience: String,
  Company_Type: String,
  Official_Mail: String,
  Company_Address: String,
  Company_City: String,
  Company_State: String,
  Company_Pin: String,
  Salary_Account_BankName: String,
  Annual_Ctc: String,
  Net_Salary: String,
  Obligations: String,
  Scheme_Offered: String,
  Loan_Amount_Applied: String,
  Tenure_Of_Loan: String,
  Credit_Card_Obligation: String,
  Reference1_FullName_Relative: String,
  Reference1_MobileNo: String,
  Reference1_Address1: String,
  Reference1_City: String,
  Reference1_State: String,
  Reference1_Pin: String,
  Reference2_FullName_Friend: String,
  Reference2_MobileNo: String,
  Reference2_Address1: String,
  Reference2_City: String,
  Reference2_State: String,
  Reference2_Pin: String,
  Caller_Name: String,
  TL_Name: String,
  Manager_Name: String,
  Disbursal_BankName: String,
  Loan_Application_No: String,
  Approved_Amount: String,
  Disbursal_Loan_Amount: String,
  Inhand_Disb_Account: String,
  Bt_Disb_Amount: String,
  Top_Up: String,
  Cibil: String,
  Tenure_Disbursal: String,
  Roi: String,
  Pf: String,
  Insurance: String,
  Emi: String,
  First_Emi_Date: String,
  Scheme: String,
  Login_Bank: String,
  Disbursal_Date: String,
  Dsa_Channel_Name: String,
  Rejection_Date: String,
  Rejection_Remark: String,
  Rejection_Description: String,
  email: String,
  Upload_Date: {
    type: Date,
    default: Date.now,
  },
});

const pDisbursedDataSchema = new mongoose.Schema({
  Status: String,
  Product_Loan: String,
  Bank_Name: String,
  Customer_Name: String,
  Father_Name: String,
  Mother_Name: String,
  Mobile: String,
  Personal_Email: String,
  Pan_Card: String,
  Customer_Location: String,
  Company_Name: String,
  Dob: String,
  Login_Date: String,
  Gender: String,
  Religion: String,
  Income_Source: String,
  Marital_Status: String,
  Spouse_Name: String,
  Qualification: String,
  Property_Status: String,
  Aadhar_Card_No: String,
  Current_Address_Line1: String,
  Current_Address_Line2: String,
  Current_City: String,
  Current_Landmark: String,
  Current_State: String,
  Current_Pin: String,
  Permanent_Address_Line1: String,
  Permanent_Address_Line2: String,
  Permanent_City: String,
  Permanent_Landmark: String,
  Permanent_State: String,
  Permanent_Pin: String,
  Designation: String,
  Current_Company_Work_Experience: String,
  Total_Work_Experience: String,
  Company_Type: String,
  Official_Mail: String,
  Company_Address: String,
  Company_City: String,
  Company_State: String,
  Company_Pin: String,
  Salary_Account_BankName: String,
  Annual_Ctc: String,
  Net_Salary: String,
  Obligations: String,
  Scheme_Offered: String,
  Loan_Amount_Applied: String,
  Tenure_Of_Loan: String,
  Credit_Card_Obligation: String,
  Reference1_FullName_Relative: String,
  Reference1_MobileNo: String,
  Reference1_Address1: String,
  Reference1_City: String,
  Reference1_State: String,
  Reference1_Pin: String,
  Reference2_FullName_Friend: String,
  Reference2_MobileNo: String,
  Reference2_Address1: String,
  Reference2_City: String,
  Reference2_State: String,
  Reference2_Pin: String,
  Caller_Name: String,
  TL_Name: String,
  Manager_Name: String,
  Disbursal_BankName: String,
  Loan_Application_No: String,
  Approved_Amount: String,
  Disbursal_Loan_Amount: String,
  Inhand_Disb_Account: String,
  Bt_Disb_Amount: String,
  Top_Up: String,
  Cibil: String,
  Tenure_Disbursal: String,
  Roi: String,
  Pf: String,
  Insurance: String,
  Emi: String,
  First_Emi_Date: String,
  Scheme: String,
  Login_Bank: String,
  Disbursal_Date: String,
  Dsa_Channel_Name: String,
  Rejection_Date: String,
  Rejection_Remark: String,
  Rejection_Description: String,
  email: String,
  Upload_Date: {
    type: Date,
    default: Date.now,
  },
});

const pRejectedDataSchema = new mongoose.Schema({
  Status: String,
  Product_Loan: String,
  Bank_Name: String,
  Customer_Name: String,
  Father_Name: String,
  Mother_Name: String,
  Mobile: String,
  Personal_Email: String,
  Pan_Card: String,
  Customer_Location: String,
  Company_Name: String,
  Dob: String,
  Login_Date: String,
  Gender: String,
  Religion: String,
  Income_Source: String,
  Marital_Status: String,
  Spouse_Name: String,
  Qualification: String,
  Property_Status: String,
  Aadhar_Card_No: String,
  Current_Address_Line1: String,
  Current_Address_Line2: String,
  Current_City: String,
  Current_Landmark: String,
  Current_State: String,
  Current_Pin: String,
  Permanent_Address_Line1: String,
  Permanent_Address_Line2: String,
  Permanent_City: String,
  Permanent_Landmark: String,
  Permanent_State: String,
  Permanent_Pin: String,
  Designation: String,
  Current_Company_Work_Experience: String,
  Total_Work_Experience: String,
  Company_Type: String,
  Official_Mail: String,
  Company_Address: String,
  Company_City: String,
  Company_State: String,
  Company_Pin: String,
  Salary_Account_BankName: String,
  Annual_Ctc: String,
  Net_Salary: String,
  Obligations: String,
  Scheme_Offered: String,
  Loan_Amount_Applied: String,
  Tenure_Of_Loan: String,
  Credit_Card_Obligation: String,
  Reference1_FullName_Relative: String,
  Reference1_MobileNo: String,
  Reference1_Address1: String,
  Reference1_City: String,
  Reference1_State: String,
  Reference1_Pin: String,
  Reference2_FullName_Friend: String,
  Reference2_MobileNo: String,
  Reference2_Address1: String,
  Reference2_City: String,
  Reference2_State: String,
  Reference2_Pin: String,
  Caller_Name: String,
  TL_Name: String,
  Manager_Name: String,
  Disbursal_BankName: String,
  Loan_Application_No: String,
  Approved_Amount: String,
  Disbursal_Loan_Amount: String,
  Inhand_Disb_Account: String,
  Bt_Disb_Amount: String,
  Top_Up: String,
  Cibil: String,
  Tenure_Disbursal: String,
  Roi: String,
  Pf: String,
  Insurance: String,
  Emi: String,
  First_Emi_Date: String,
  Scheme: String,
  Login_Bank: String,
  Disbursal_Date: String,
  Dsa_Channel_Name: String,
  Rejection_Date: String,
  Rejection_Remark: String,
  Rejection_Description: String,
  email: String,
  Upload_Date: {
    type: Date,
    default: Date.now,
  },
});

// Hash the password before saving
pEmployeeSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

const partnerModel = mongoose.model("Partner", partnerSchema);
const PEmployee = mongoose.model("pEmployee", pEmployeeSchema);
const PFormalData = mongoose.model("pFormalData", pFormalDataSchema);
const PPendingFormData = mongoose.model("PpendingFormData", pPendingFormSchema);
const PDisbursedData = mongoose.model("PdisbursedData", pDisbursedDataSchema);
const PRejectedData = mongoose.model("Prejecteddata", pRejectedDataSchema);

export {
  partnerModel,
  PEmployee,
  PDisbursedData,
  PPendingFormData,
  PRejectedData,
  PFormalData,
};
