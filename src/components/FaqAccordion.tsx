import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


const FaqAccordion = () => {
    return (
       <section data-aos="fade-up" data-aos-duration="1500" className="w-full  py-16">
      <div className="container mx-auto max-w-2xl px-6">
        <h2 className="text-center text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is a Digital Wallet?
            </AccordionTrigger>
            <AccordionContent>
              A digital wallet is an electronic service or app that lets you
              securely store funds, make payments, and track transactions
              online or in-store.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I add money?
            </AccordionTrigger>
            <AccordionContent>
              You can add money through your debit/credit card, bank transfer,
              or by receiving funds from other users.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is my money safe?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Your transactions are encrypted, and we use two-factor
              authentication to keep your account secure.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I withdraw money to my bank?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! You can transfer your balance to your linked bank
              account at any time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Does it work internationally?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our wallet supports international payments and transfers,
              depending on your bank and local regulations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
    );
};

export default FaqAccordion;