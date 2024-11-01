import React from 'react';
import Footer1 from './Footer1';

const Navbar = () => {
  return (
    <>
      <Footer1></Footer1>
      <footer className="bg-white border-t ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6 p-4">
          {/* Popular Categories Section */}
          <div>
            <h3 className="font-semibold mb-4 text-black">popular categories</h3>
            <ul className="space-y-2">
              <li className='link-hover'>Women's  clothing</li>
              <li className='link-hover'>Children's clothing</li>
              <li className='link-hover'>Baby clothes</li>
              <li className='link-hover'>Bedding</li>
              <li className='link-hover'>Home accessories</li>
              <li className='link-hover'>Towels</li>
              <li className='link-hover'>Window decoration</li>
              <li className='link-hover'>Toys</li>
              <li className='link-hover'>Pastry</li>
              <li className='link-hover'>Coffee</li>
            </ul>
          </div>

          {/* More for HEMA Fans Section */}
          <div>
            <h3 className="font-semibold mb-4 text-black">more for HEMA fans</h3>
            <ul className="space-y-2">
              <li className='link-hover'>HEMA app</li>
              <li className='link-hover'>HEMA pass</li>
              <li className='link-hover'>Read our brochures</li>
              <li className='link-hover'>Receive brochure via WhatsApp</li>
              <li className='link-hover'>HEMA on social media</li>
              <li className='link-hover'>HEMA redesign competition</li>
              <li className='link-hover'>HEMA photo service</li>
              <li className='link-hover'>HEMA gift cards</li>
              <li className='link-hover'>HEMA tickets</li>
              <li className='link-hover'>HEMA insurance</li>
              <li className='link-hover'>Inspiration</li>
              <li className='link-hover'>News</li>
            </ul>
          </div>

          {/* About HEMA Section */}
          <div>
            <h3 className="font-semibold mb-4 text-black">about HEMA</h3>
            <ul className="space-y-2">
              <li className='link-hover'>About our company</li>
              <li className='link-hover'>Working at HEMA</li>
              <li className='link-hover'>Good idea from HEMA</li>
              <li className='link-hover'>News and press</li>
              <li className='link-hover'>HEMA history</li>
              <li className='link-hover'>HEMA business</li>
              <li className='link-hover'>Customer service</li>
              <li className='link-hover'>Terms and conditions</li>
              <li className='link-hover'>Request gift card balance</li>
              <li className='link-hover'>Partnerships</li>
            </ul>
          </div>

          {/* International Section */}
          <div>
            <h3 className="font-semibold mb-4 text-black">international</h3>
            <ul className="space-y-2">
              <li className='link-hover'>HEMA Belgium</li>
              <li className='link-hover'>HEMA Germany</li>
              <li className='link-hover'>HEMA France</li>
              <li className='link-hover'>HEMA Austria</li>
              <li className='link-hover'>HEMA United Arab Emirates</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-5 border-t py-6 text-sm font-medium">
          <div className="flex flex-col lg:flex-row-reverse lg:justify-around items-center space-x-3">

            <div className="flex flex-wrap pb-6 border-b-2 lg:border-0">
              <p className="text-gray-600 px-2 border-r-2 link-hover">privacy statement</p>
              <p className="text-gray-600 px-2 border-r-2 link-hover">disclaimer</p>
              <p className="text-gray-600 px-2 border-r-2 link-hover">security</p>
              <p className="text-gray-600 px-2 border-r-2 link-hover">copyright</p>
              <p className="text-gray-600 px-2 border-r-2 link-hover">general terms and conditions</p>
              <p className="text-gray-600 px-2 border-r-2 link-hover">cookies</p>
              <div className="flex items-center px-2 border-r-2">
                <p className="text-gray-600 link-hover">nothing 18</p>
                <img src="/nix-18.webp" className="max-w-12 h-4 ml-2" alt="Nix 18" />
              </div>
              <div className="flex items-center px-2">
                <p className="text-gray-600 link-hover">home shopping guarantee</p>
                <img src="/secured-shopping.webp" className="w-4 h-4 ml-2" alt="Secured Shopping" />
              </div>
            </div>


            <img src="/logo.svg" alt="HEMA Logo" className="pt-5 lg:pt-0" />
          </div>


        </div>
        <div className="border-t-2 pt-6 text-sm text-gray-600 text-center">
          <p>HEMA BV, NDSM-straat 10, 1033 SB Amsterdam</p>
          <p>Chamber of Commerce number: 34215639</p>
          <p> IBAN: HEMA NL671INGB0651607643</p>
          <p>VAT ID: NL814217412B01</p>
          <p>Customer service: hemaklantenservice@hema.nl</p>
        </div>
      </footer></>
  );
};

export default Navbar;
