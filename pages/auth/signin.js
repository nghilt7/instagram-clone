import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function signin({ providers }) {
  return (
    <div>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex w-20 h-25"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgadgetadvisor.com%2Fwp-content%2Fuploads%2F2020%2F02%2Finstagram-loves.png&f=1&nofb=1"
          alt="Photo"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gatewayspesach.org%2Fwp-content%2Fuploads%2F2019%2F08%2F600px-Instagram_logo_2016.svg_-540x540.png&f=1&nofb=1"
                alt="photo"
              />
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white mt-3 hover:bg-red-500"
              >
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
