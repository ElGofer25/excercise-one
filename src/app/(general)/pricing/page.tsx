

export const metadata = {
 title: 'Pricing Page',
 description: 'This is our Home Page',
};

export default function PricingPage() {
  return (
    <div className="text-center flex flex-col">
          <h1 className="text-5xl gap-2 p-6">
            Pricing Page
          </h1>
          <p className="font-medium text-white/70">
            This is your pricing page
          </p>
      </div>
  );
}