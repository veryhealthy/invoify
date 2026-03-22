import { z } from "zod";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

const v = {
    name: z.string().min(2, "Must be at least 2 characters").max(50, "Must be at most 50 characters"),
    address: z.string().min(2, "Must be at least 2 characters").max(70, "Must be at most 70 characters"),
    zipCode: z.string().min(2, "Must be between 2 and 20 characters").max(20, "Must be between 2 and 20 characters"),
    city: z.string().min(1, "Required").max(50, "Must be at most 50 characters"),
    country: z.string().min(1, "Required").max(70, "Must be at most 70 characters"),
    email: z.string().email("Must be a valid email").min(5, "Too short").max(50, "Too long"),
    phone: z.string().min(1, "Required").max(50, "Too long"),
    date: z.date().transform((date) => new Date(date).toLocaleDateString("en-US", DATE_OPTIONS)),
    quantity: z.coerce.number().gt(0, "Must be greater than 0"),
    unitPrice: z.coerce.number().gt(0, "Must be greater than 0").lte(Number.MAX_SAFE_INTEGER),
    str: z.string(),
    strMin1: z.string().min(1, "Required"),
    strOpt: z.string().optional(),
    num: z.coerce.number(),
    numPositive: z.coerce.number().nonnegative("Must be positive"),
};

const CustomInputSchema = z.object({
    key: z.string(),
    value: z.string(),
});

const InvoiceSenderSchema = z.object({
    name: v.name,
    siret: v.str,
    address: v.address,
    zipCode: v.zipCode,
    city: v.city,
    country: v.country,
    email: v.email,
    phone: v.phone,
    customInputs: z.array(CustomInputSchema).optional(),
});

const InvoiceReceiverSchema = z.object({
    name: v.name,
    address: v.address,
    zipCode: v.zipCode,
    city: v.city,
    country: v.country,
    email: v.email.optional().or(z.literal("")),
    phone: v.phone.optional().or(z.literal("")),
    customInputs: z.array(CustomInputSchema).optional(),
});

const ItemSchema = z.object({
    name: v.strMin1,
    description: v.strOpt,
    quantity: v.quantity,
    unitPrice: v.unitPrice,
    total: v.num,
});

const SignatureSchema = z.object({
    data: v.str,
    fontFamily: v.str.optional(),
});

const InvoiceDetailsSchema = z.object({
    invoiceLogo: v.strOpt,
    invoiceNumber: v.strMin1,
    invoiceDate: v.date,
    dueDate: v.date,
    purchaseOrderNumber: v.strOpt,
    currency: v.str,
    language: v.str,
    items: z.array(ItemSchema),
    subTotal: v.numPositive,
    totalAmount: v.numPositive,
    additionalNotes: v.strOpt,
    paymentTerms: v.strOpt,
    signature: SignatureSchema.optional(),
    updatedAt: v.strOpt,
    pdfTemplate: z.number(),
});

const InvoiceSchema = z.object({
    sender: InvoiceSenderSchema,
    receiver: InvoiceReceiverSchema,
    details: InvoiceDetailsSchema,
});

export { InvoiceSchema, ItemSchema };
