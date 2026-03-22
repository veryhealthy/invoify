"use client";

// Components
import {
    Charges,
    FormTextarea,
    SignatureModal,
    Subheading,
} from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";
import { SignatureContextProvider } from "@/contexts/SignatureContext";

const InvoiceSummary = () => {
    const { _t } = useTranslationContext();

    return (
        <section>
            <Subheading>{_t("form.steps.summary.heading")}:</Subheading>
            <div className="flex flex-wrap gap-x-5 gap-y-10">
                <div className="flex flex-col gap-3">
                    <SignatureContextProvider>
                        {/* Signature dialog */}
                        <SignatureModal />
                    </SignatureContextProvider>

                    {/* Additional notes */}
                    <FormTextarea
                        name="details.additionalNotes"
                        label={_t("form.steps.summary.additionalNotes")}
                        placeholder="Your additional notes"
                    />

                    {/* Termes et conditions */}
                    <FormTextarea
                        name="details.paymentTerms"
                        label={_t("form.steps.summary.termsAndConditions")}
                        placeholder="Acompte de 50% à la signature&#10;Solde à la livraison&#10;Paiement sous 30 jours"
                    />
                </div>

                {/* Total */}
                <Charges />
            </div>
        </section>
    );
};

export default InvoiceSummary;
