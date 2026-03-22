"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// RHF
import { useFormContext, useWatch } from "react-hook-form";

// Types
import { InvoiceType, ItemType } from "@/types";

const defaultChargesContext = {
    currency: "EUR",
    totalAmount: 0,
};

export const ChargesContext = createContext(defaultChargesContext);

export const useChargesContext = () => {
    return useContext(ChargesContext);
};

type ChargesContextProps = {
    children: React.ReactNode;
};

export const ChargesContextProvider = ({ children }: ChargesContextProps) => {
    const { control, setValue } = useFormContext<InvoiceType>();

    const itemsArray = useWatch({ name: "details.items", control });
    const currency = useWatch({ name: "details.currency", control });

    const [totalAmount, setTotalAmount] = useState<number>(0);

    useEffect(() => {
        const total: number = itemsArray.reduce(
            (sum: number, item: ItemType) => sum + Number(item.total),
            0
        );

        setTotalAmount(total);
        setValue("details.subTotal", total);
        setValue("details.totalAmount", total);
    }, [itemsArray, currency]);

    return (
        <ChargesContext.Provider value={{ currency, totalAmount }}>
            {children}
        </ChargesContext.Provider>
    );
};
