import React from "react";
import CardWithForm from "../Shadcn/CardWithForm";

const Premium = () => {
  return (
    <div className="flex justify-center min-h-[90vh] max-h-[200vh] py-8 items-center  bg-gradient-to-r from-[#8800FF] to-[#FF00C1]">
      {/* Apply flex-wrap to allow the cards to wrap on smaller screens */}
      <div className="flex flex-wrap gap-4 justify-center w-full px-4">
        <CardWithForm
          cardName={"Free Membership"}
          numOfRequests={10}
          month={1}
          color={"text-green-800"}
          bgColor={"bg-green-800"}
          border={"border-green-800"}
          rupees={"{Rs. 0}"}
        />
        <CardWithForm
          cardName={"Silver Membership"}
          numOfRequests={100}
          month={3}
          color={"text-slate-600"}
          bgColor={"bg-slate-600"}
          border={"border-slate-700"}
          rupees={"{Rs. 200}"}
        />
        <CardWithForm
          cardName={"Gold Membership"}
          numOfRequests={"1000"}
          month={6}
          color={"text-yellow-700"}
          bgColor={"bg-yellow-700"}
          border={"border-yellow-700"}
          rupees={"{Rs. 400}"}
        />
      </div>
    </div>
  );
};

export default Premium;
