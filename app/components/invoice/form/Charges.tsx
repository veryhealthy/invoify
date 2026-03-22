"use client";

// Contexts
import { useChargesContext } from "@/contexts/ChargesContext";
import { useTranslationContext } from "@/contexts/TranslationContext";

// Helpers
import { formatNumberWithCommas } from "@/lib/helpers";

const Charges = () => {
    const { _t } = useTranslationContext();
    const { currency, totalAmount } = useChargesContext();

    return (
        <div className="flex flex-col gap-3 min-w-[20rem]">
            <div className="flex flex-col justify-center px-5 gap-y-3">
                <div className="flex justify-between items-center">
                    <div className="font-semibold">
                        {_t("form.steps.summary.totalAmount")}
                    </div>
                    <div>
                        {formatNumberWithCommas(totalAmount)} {currency}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charges;
