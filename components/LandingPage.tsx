import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { Github } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white">
      <header className="bg-gradient-to-r from-green-400 to-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <Link href={"../mintable"}>Kaia</Link>
          </h1>
          <nav className="space-x-4">
            <Link
              href={"https://klaytn.foundation/blog/"}
              className="hover:underline"
            >
              Blog
            </Link>
            <Link
              href={"../mintable/"}
              className="bg-white text-black py-2 px-4 rounded"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Image Section 1 */}
      <section className="mt-16">
        <div className="relative h-64">
          <Image
            src="/home-banner.png"
            layout="fill"
            objectFit="cover"
            alt="Home Image"
            className="rounded"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-3xl font-bold">Create Your Own Tokens</h3>
          <p className="mt-2">
            Our platform allows you to easily create and manage your own ERC20
            tokens on the Ethereum blockchain.
          </p>
        </div>
      </section>

      <main className="container mx-auto py-16">
        <section className="text-center">
          <h2 className="text-4xl font-bold">
            The modern token creation platform
          </h2>
          <p className="mt-4">
            Simplify the process of creating and managing ERC20 tokens with our
            user-friendly platform.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              href={"../mintable/"}
              className="bg-green-500 py-2 px-6 rounded"
            >
              Get Started
            </Link>
            <Link
              href={"https://klaytn.foundation/"}
              className="border border-green-500 py-2 px-6 rounded"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section id="features" className="mt-16">
          <h3 className="text-3xl font-bold text-center">
            Tokens We Offer For Free
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-gray-800 rounded">
              <h4 className="text-xl font-semibold">Mintable</h4>
              <p className="mt-2">
                Create tokens that can be minted as needed.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded">
              <h4 className="text-xl font-semibold">Burnable</h4>
              <p className="mt-2">
                Create tokens that can be burned to reduce supply.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded">
              <h4 className="text-xl font-semibold">Pausable</h4>
              <p className="mt-2">
                Create tokens that can be paused in case of emergencies.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded">
              <h4 className="text-xl font-semibold">Capped</h4>
              <p className="mt-2">Create tokens with a fixed maximum supply.</p>
            </div>
            <div className="p-4 bg-gray-800 rounded">
              <h4 className="text-xl font-semibold">TimeLock</h4>
              <p className="mt-2">
                Create tokens that are locked for a certain period.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section 2 */}
        <section className="mt-16">
          <div className="relative h-64">
            <Image
              src="/kaia-logo.png"
              layout="fill"
              objectFit="cover"
              alt="Business Image"
              className="rounded"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-3xl font-bold">Transform Your Business</h3>
            <p className="mt-2">
              Leverage our platform to unlock new potentials and grow your
              business.
            </p>
          </div>
        </section>

        <section id="developer" className="mt-16 text-center">
          <h3 className="text-3xl font-bold">Developer</h3>
          <p className="mt-4">
            Ready to elevate your business with our solutions? Get in touch with
            us today!
          </p>
          <Link
            href={"https://github.com/preetsinghmakkar"}
            className="inline-flex items-center mt-6 bg-green-500 py-2 px-6 rounded"
          >
            <Github className="mr-2" />
            Preet Singh
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
