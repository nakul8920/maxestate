import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-elegant">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Please read these terms carefully before using our website
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-luxury p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold text-navy-deep mb-4">Terms of Use</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                By accessing or using this landing page, you acknowledge and agree to abide by the following terms and conditions.
              </p>

              <h2 className="text-2xl font-bold text-navy-deep mb-4 mt-8">Intellectual Property Rights</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                All content, images, logos, and materials displayed on this landing page are the exclusive property of the real estate company or its licensors and are safeguarded by intellectual property laws. Unauthorized copying, modification, distribution, or usage of any content is strictly prohibited without prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-navy-deep mb-4 mt-8">Property Information Disclaimer</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                The information provided on this landing page, including property descriptions, prices, availability, and other details, is subject to change without prior notice. The real estate company shall not be held accountable for any inaccuracies or omissions in the information provided.
              </p>

              <h2 className="text-2xl font-bold text-navy-deep mb-4 mt-8">User Responsibilities</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                Users are responsible for furnishing accurate and current information when submitting inquiries or requests through this landing page. Additionally, users agree not to engage in unlawful or detrimental activities, such as hacking, spamming, or transmitting malicious software.
              </p>

              <h2 className="text-2xl font-bold text-navy-deep mb-4 mt-8">Privacy and Data Handling</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                This real estate company collects, stores, and utilizes user data in compliance with applicable privacy laws. The landing page may employ third-party services or tracking technologies, like cookies or analytics tools, for which detailed information can be found in the privacy policy.
              </p>

              <h2 className="text-2xl font-bold text-navy-deep mb-4 mt-8">Disclaimer of Liability</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                Under no circumstances shall the real estate company be liable for damages, losses, or injuries arising from the use of this landing page or reliance on the provided information. This includes, but is not limited to, financial losses, property damage, or any direct or indirect damages.
              </p>

              <h2 className="text-2xl font-bold text-navy-deep mb-4 mt-8">Third-Party Website Links</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                Links provided on this landing page to external websites or resources do not signify endorsement or assumption of responsibility for their content, privacy practices, or availability by the real estate company.
              </p>

              <h2 className="text-2xl font-bold text-navy-deep mb-4 mt-8">Modification of Terms</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                The real estate company reserves the right to revise or modify these terms and conditions at any time without prior notice. Users are encouraged to periodically review the terms for updates.
              </p>

              <h2 className="text-2xl font-bold text-navy-deep mb-4 mt-8">Governing Law and Jurisdiction</h2>
              <p className="text-gray-elegant mb-6 leading-relaxed">
                Any legal disputes arising from the use of this landing page shall be resolved within the specified jurisdiction and governed by the applicable laws pertaining to that jurisdiction.
              </p>

            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              For any questions regarding these terms, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="text-black"
                style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f5e08a 50%, #d4af37 100%)' }}
                onClick={() => window.open('tel:7303665082', '_self')}
              >
                📞 +91 7303665082
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/917303665082?text=Hi, I have a question about the Terms & Conditions.', '_blank')}
              >
                💬 WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
