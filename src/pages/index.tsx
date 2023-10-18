/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Base from "u/components/base";
import Card from "u/components/card";
import CategoryStack from "u/components/category";
import Loading from "u/components/loading";
import { type Category } from "u/interfaces/category";
import { type Course } from "u/interfaces/course";
import { api } from "u/utils/api";

const CategoryView = (): {
  categories: Category[] | undefined, isCategoryLoading: boolean
} => {
  const { data, isLoading } = api.categoryRouter.getAll.useQuery();
  return {categories: data, isCategoryLoading: isLoading}
}

const Home: NextPage = () => {
  const { categories, isCategoryLoading } = CategoryView();

  return isCategoryLoading ? (<Loading />) : (
    <Base>
      <div className="min-h-screen pb-24">
        <div className="relative bg-bg-slate-900 px-6 md:px-0">
          <div>
            <div className="flex items-center pt-10 md:pt-20 flex-col text-center">
              <h1 className="text-4xl md:text-6xl text-transparent bg-gradient-to-b to-indigo-700 from-indigo-400 font-extrabold bg-clip-text mb-6">Developer <i>Fast</i> Card</h1>
              <div className="md:container">
                <p className="text-slate-500 text-lg md:text-md font-normal"><b>Fastcard.dev</b> helps you understand the basic knowledge about everything in the developer world. We as community have also built this platform to guide you if you already know the roadmap for your journey. Start exploring, or you can also contribute</p>
              </div>
            </div>
          </div>
          <div>
            {
              !isCategoryLoading && categories?.map((item) => {
                return <div className="mt-16 md:container mx-auto" key={item.id}>
                  <CategoryStack name={item.name}></CategoryStack>
                  <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-2 md:gap-6 mt-4">
                    {
                      item.Course?.map((course: Course) => {
                        return <Card key={course.id} name={course.title} id={course.id} slug={course.slug}></Card>
                      })
                    }
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
