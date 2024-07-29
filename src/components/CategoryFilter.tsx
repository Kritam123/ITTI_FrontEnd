import { CatergoryData, CatergoryDataItem } from "@/lib/FilterCategoryData";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Label } from "./ui/label";
import queryString from "query-string"
import { useNavigate } from "react-router-dom";

const CategoryFilter = ({ setCategories, categories }: { setCategories: (categories: []) => void, categories: [] }) => {
  const navigate = useNavigate();
  const handleChange = (check: boolean, list: string) => {
    // @ts-ignore
    setCategories((prevCategories:[]) => {
      const newCategories = !check ? prevCategories.filter((c: string) => c !== list) : [...prevCategories, list];
      navigate(`/search/result?${queryString.stringify({...queryString.parse(location.search),categories:newCategories.join(',')})}`);
      return newCategories
    })

  };
  return (
    <div className="p-5">
      <>
        {CatergoryData.map((item: CatergoryDataItem, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={item.type} >
              <AccordionTrigger className="hover:no-underline">
                {item.type}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col px-5 py-2 gap-4">
                  {item.lists.map((list, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                      <Checkbox
                      // @ts-ignore
                        checked={categories.includes(list.id.toString())}
                        onCheckedChange={(checked: boolean) =>
                          handleChange(checked, list.id.toString())
                        }
                        className="border"
                      />
                      <Label
                        className="text-[15px] text-gray-600"
                        defaultValue={1}
                        htmlFor={list.name}
                      >
                        {list.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </>

      {/* sdd */}

      {/* laptop screen size */}
      {/* brand */}
      {/* cpu generation */}
      {/* type */}
      {/* processor brand  */}
      {/* processor  */}
      {/* ram */}
      {/* graphics */}
      {/* os */}
      {/* interface */}
    </div>
  );
};

export default CategoryFilter;
