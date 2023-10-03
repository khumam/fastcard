/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import Base from "u/components/base";
import Card from "u/components/card";
import CategoryStack from "u/components/category";
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

  return (
    <Base>
      <div className="relative bg-bg-slate-900">
        <div className="absolute w-full h-full bg-pattern -z-10">
        </div>
        <div>
          <div className="flex items-center pt-10 md:pt-20 flex-col text-center">
            <h1 className="text-4xl md:text-6xl text-transparent bg-gradient-to-tr from-indigo-400 to-indigo-600 font-medium bg-clip-text mb-6">Developer <i>Fast</i> Card</h1>
            <p className="text-zinc-500 text-sm md:text-md font-light"><b>Fastcard.dev</b> helps you understand the basic knowledge about everything in the developer world.<br></br>We as community have also built this platform to guide you if you already know the roadmap for your journey.<br></br>Start exploring, or you can also contribute</p>
          </div>
        </div>
        {
          !isCategoryLoading && categories?.map((item) => {
            return <div className="mt-16 md:container mx-auto" key={item.id}>
              <CategoryStack name={item.name}></CategoryStack>
              <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-6 mt-4">
                {
                  item.Course?.map((course: Course) => {
                    return <Card key={course.id} name={course.title} id={course.id}></Card>
                  })
                }
              </div>
            </div>
          })
        }
      </div>
    </Base>
  );
};

export default Home;
