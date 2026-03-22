import React from "react";

// Components
import { InvoiceLayout } from "@/app/components";

// Helpers
import { formatNumberWithCommas, isDataUrl } from "@/lib/helpers";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

// Types
import { InvoiceType } from "@/types";

const InvoiceTemplate = (data: InvoiceType) => {
    const { sender, receiver, details } = data;

    return (
        <InvoiceLayout data={data}>
            <div>
                {details.invoiceLogo && (
                    <img src={details.invoiceLogo} width={140} height={100} alt={`Logo of ${sender.name}`} />
                )}
                <h2 className="mt-2 text-6xl font-normal">DEVIS</h2>
                <span>Devis n°{details.invoiceNumber}</span>
                <dl className="flex flex-row">
                    <dt>
                        <b>Date du devis</b> :&nbsp;
                    </dt>
                    <dd>{new Date(details.invoiceDate).toLocaleDateString("fr-FR", DATE_OPTIONS)}</dd>
                </dl>
                <span>
                    <b>Validité du devis</b>
                    {" : "}1 mois
                </span>
            </div>
            <hr className="h-px my-8 bg-black border-0" />
            <div className="flex flex-row">
                <div className="w-6/12">
                    <h2 className="font-bold uppercase">{sender.name}</h2>
                    <p>Entrepreneur individuel</p>
                    <p>{sender.siret}</p>
                    <address className="mt-4 not-italic">
                        {sender.address}
                        <br />
                        {sender.zipCode}, {sender.city}
                        <br />
                        {sender.country}
                        <br />
                    </address>
                </div>
                <div className="w-6/12 flex flex-col items-end">
                    <h3 className="uppercase font-bold">À l'attention de</h3>
                    <h3 className="font-bold">{receiver.name}</h3>
                    <address className="mt-4 not-italic text-right">
                        {receiver.address}
                        <br />
                        {receiver.zipCode}, {receiver.city}
                        <br />
                        {receiver.country}
                        <br />
                    </address>
                </div>
            </div>

            <div className="mt-3">
                <div className="border border-black space-y-1">
                    <div className="hidden sm:grid sm:grid-cols-5 border-b border-black font-bold uppercase">
                        <div className="sm:col-span-2 text-xs py-4 text-center">Description</div>
                        <div className="text-xs py-4 text-center">Quantité</div>
                        <div className="text-xs py-4 text-center">Prix</div>
                        <div className="text-xs py-4 text-center">Total</div>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-1">
                        {details.items.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="col-span-full sm:col-span-2 py-4 text-center">
                                    <p>{item.name}</p>
                                </div>
                                <div className="py-4 text-center">
                                    <p>{item.quantity}</p>
                                </div>
                                <div className="py-4 text-center">
                                    <p>
                                        {item.unitPrice} {details.currency}
                                    </p>
                                </div>
                                <div className="py-4 text-center">
                                    <p>
                                        {item.total} {details.currency}
                                    </p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* TVA exemption notice */}
            <div className="mt-4">
                <p className="flex justify-end font-bold">TVA non applicable, art. 293 B du CGI</p>
            </div>

            <dl className="mt-4 font-extrabold uppercase bg-black text-white p-4 w-full flex flex-row justify-end">
                <dt className="">Total :&nbsp;</dt>
                <dd className="w-[180px] flex justify-end">
                    {formatNumberWithCommas(Number(details.totalAmount))} {details.currency}
                </dd>
            </dl>

            <div className="flex flex-row py-24">
                <div className="w-6/12">
                    <p className="font-bold">Termes et conditions</p>
                    {details.paymentTerms ? (
                        <p>{details.paymentTerms}</p>
                    ) : (
                        <>
                            <p>Acompte de 25% à la signature</p>
                            <p>Solde à la livraison</p>
                            <p>Paiement sous 30 jours</p>
                        </>
                    )}
                </div>
                <div className="w-6/12 flex flex-col">
                    <p className="w-10/12 mx-auto">
                        <b>Signature suivie de la mention "Bon pour accord"</b>
                    </p>
                    <hr className="h-px w-6/12 mt-16 mx-auto bg-black border-0" />
                </div>
            </div>

            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full h-px my-8 bg-black border-0" />
                <span className="absolute px-3 font-medium text-heading -translate-x-1/2 bg-[#f8f6f2] left-1/2 uppercase">
                    Merci de votre confiance
                </span>
            </div>
        </InvoiceLayout>
    );
};

export default InvoiceTemplate;
