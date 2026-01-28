import { Menu, Smartphone } from "lucide-react";
import { Button } from "../../../../libs/ui/src/components/button";
import React from "react";

interface NavLink {
  containerClassName?: string;
  className?: string;
  iconClassName?: string;
  buttonText?: string;
  href?: string;
  action?: string;
  icon?: React.ReactNode;
  counterText?: string;
  showCounter?: boolean;
}

const TopNavContent = ({navLinks} :  {navLinks: Array<NavLink>}) => {
  return (
    <div className=" w-full h-[40px] bg-green-600 flex justify-center items-center">
      <div
        className="lg:w-11/12 md:w-11/12 w-11/12 flex justify-between items-center
                "
      >
        <div className="flex justify-center items-center gap-x-1 font-medium">
          <Smartphone size={16} className="" />
          <div className="text-sm">Download App</div>
        </div>

        <div className="h-full md:flex hidden justify-center items-center gap-x-4">
          {navLinks.map((d, index) => {
            return d?.icon ? (
              <Button
                key={index}
                containerClassName={d?.containerClassName ?? ""}
                className={d?.className ?? ""}
                iconClassName={d?.iconClassName ?? ""}
                buttonText={d?.buttonText ?? ""}
                type={"link"}
                href={d?.href ?? ""}
                action={d?.action ?? ""}
                icon={d.icon as React.ReactElement}
                counterText={d?.counterText ?? ""}
                showCounter={d?.showCounter ?? false}
              />
            ) : null;
          })}

          {/* <LocaleButton /> */}
        </div>

        <div className="md:hidden flex">
          <Button
            containerClassName="flex justify-center items-center"
            className="flex justify-center items-center gap-x-1 text-md"
            iconClassName="relative"
            buttonText=""
            type="button"
            href={""}
            action={""}
            icon={<Menu size={16} />}
            counterText=""
            showCounter={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavContent;
