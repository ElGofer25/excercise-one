

export const metadata = {
 title: 'Contact Page',
 description: 'This is our Contact Page',
};

export default function ContactPage() {
  return (
    <div className="text-center flex flex-col">
          <h1 className="text-5xl gap-2 p-6">
            Contact Page
          </h1>
          <p className="font-medium text-white/70">
            This is our Contact Page
          </p>
      </div>
  );
}