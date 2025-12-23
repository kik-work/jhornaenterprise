"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

type EntryType = "buy" | "sell";

type Entry = {
    item: string;
    date: string;
    quantity: number;
    price: number;
};

type Props = {
    type: EntryType;
    selectedDate: string;
    onAdd: (entry: Entry) => void;
};

// Zod schema
const entrySchema = z.object({
    item: z.string().min(1, "Item is required"),
    quantity: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
            message: "Quantity must be a positive number",
        }),
    price: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
            message: "Price must be a positive number",
        }),
});
import type { ZodIssue } from "zod";

const AddEntryForm: React.FC<Props> = ({ type, selectedDate, onAdd }) => {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [open, SetOpen] = useState(false);



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = entrySchema.safeParse({ item, quantity, price });

        if (!result.success) {
            const formErrors: { [key: string]: string } = {};
            result.error.issues.forEach((err: ZodIssue) => {
                if (err.path[0]) {
                    formErrors[err.path[0] as string] = err.message;
                }
            });
            setErrors(formErrors);
            return;
        }

        onAdd({
            item,
            date: selectedDate,
            quantity: parseFloat(quantity),
            price: parseFloat(price),
        });

        // Reset form
        setItem("");
        setQuantity("");
        setPrice("");
        setErrors({});
    };



    return (
        <form
            onSubmit={handleSubmit}
            className="w-full p-6 mb-6 border rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm space-y-4"
        >
            <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {type === "buy" ? "Buy" : "Sell"} Entry Form
                </h3>
                {!open ? <>      <Button onClick={() => { SetOpen(true) }}> Add </Button></> : <><X onClick={() => { SetOpen(false) }} /></>}


            </div>
            {open && <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Item */}
                    <div className="flex flex-col">
                        <label
                            htmlFor={`item-${type}`}
                            className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                            Item
                        </label>
                        <input
                            id={`item-${type}`}
                            type="text"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            placeholder="Enter item name"
                            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        />
                        {errors.item && <p className="text-red-500 text-sm mt-1">{errors.item}</p>}
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col">
                        <label
                            htmlFor={`quantity-${type}`}
                            className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                            Quantity
                        </label>
                        <input
                            id={`quantity-${type}`}
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Enter quantity"
                            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        />
                        {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                    </div>

                    {/* Price */}
                    <div className="flex flex-col">
                        <label
                            htmlFor={`price-${type}`}
                            className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-300"
                        >
                            Price
                        </label>
                        <input
                            id={`price-${type}`}
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter price"
                            className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        />
                        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    className="px-5 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition"
                >
                    Add {type === "buy" ? "Buy" : "Sell"}
                </button>
            </>}

        </form>
    );
};

export default AddEntryForm;
