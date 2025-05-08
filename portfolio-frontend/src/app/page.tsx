import Activity from "@/modules/activity/components/activity.component";
import Layout from "@/modules/layouts/layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-white">
        <h1>Home</h1>
      </section>
      <section className="mt-5">
        <h2 className="text-white font-semibold text-2xl">What I'm Doing?</h2>
        <div className="grid grid-cols-2 gap-3 mt-5">
          <Activity />
        </div>
      </section>
      <section className="mt-5">
        <h2 className="text-white font-semibold text-2xl">
          Soft Skills
        </h2>
        <div className="grid grid-cols-2 gap-3 mt-10">
          <div className="py-5 px-8 rounded-lg shadow-lg bg-neutral-800 flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-4">
                    <div className="bg-neutral-700 p-3 rounded-xl flex -mt-10">
                      Icono
                    </div>
                    <h3 className="text-lg text-white font-semibold">
                        Soft Skills
                    </h3>
                </div>
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, repellendus?
                </p>
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
