export const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-pastel-pink/50">
      <div className="container-responsive py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">R.K SWEETS</h4>
          <p className="text-gray-600 text-sm">Premium Indian sweets, freshly made every day.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>MG Road, Railpar</li>
            <li>+91-98765-43210</li>
            <li>hello@rksweets.in</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Timings</h4>
          <p className="text-sm text-gray-600">Mon–Sun: 9:00 AM – 9:00 PM</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <div className="flex gap-2 text-sm text-gray-600">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">X</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center small-muted">
        © {new Date().getFullYear()} R.K Sweet. All rights reserved.
      </div>
    </footer>
  );
};
