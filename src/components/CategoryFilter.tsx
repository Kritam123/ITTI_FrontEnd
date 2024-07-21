import { CatergoryData, CatergoryDataItem } from "@/lib/FilterCategoryData";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Label } from "./ui/label";
interface ItemsProps {
  id: number;
  name: string;
}
const CategoryFilter = () => {
  let filtersData: ItemsProps[] = [];
  const handleChange = (check:boolean, list: ItemsProps) => {
    if (check) {
      filtersData.push(list);
    } else {
      filtersData = filtersData.filter((ele) => ele.id !== list.id);
    }
  };
  return (
    <div className="p-5">
      <>
        {CatergoryData.map((item: CatergoryDataItem, index) => (
      <Accordion key={index}  type="single" collapsible className="w-full">
            <AccordionItem value={item.type} >
              <AccordionTrigger className="hover:no-underline">
                {item.type}
              </AccordionTrigger>
              <AccordionContent className="">
                <div className="flex flex-col px-5 py-2 gap-4">
                  {item.lists.map((list, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                      <Checkbox
                        onCheckedChange={(checked:boolean) =>
                          handleChange(checked, list)
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
