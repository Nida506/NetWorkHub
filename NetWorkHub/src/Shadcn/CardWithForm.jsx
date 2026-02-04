import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export function CardWithForm({
  cardName,
  numOfRequests,
  month,
  color,
  bgColor,
  border,
  rupees,
}) {
  //handler function

  const handleByClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      { type },
      {
        withCredentials: true,
      }
    );
    console.log(order);
    const { keyId, amount, currency, notes, order_id } = order.data;
    console.log(notes);
    const options = {
      key: keyId,
      amount,
      currency,
      name: "Tinder",
      description: "Connect to other developers",
      order_id,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#100bb2",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };
  return (
    <Card className={`min-w-fit bg-blue-100 border-2 ${border}`}>
      <CardHeader>
        <CardTitle className={`text-center text-2xl ${color} font-bold`}>
          {cardName}
        </CardTitle>
        <CardDescription className="text-base text-black-200 font-semibold">
          <ul>
            <li>- Chat with other people</li>
            <li>- {numOfRequests} Connection Requests per day</li>
            <li>
              <div className="flex">
                <span>- </span>
                <span className="ms-1"> Blue Tick</span>
                <img src="/blueTick.png" className="w-7 mx-2" />
              </div>
            </li>
            <li>
              - {month} month{" "}
              <span className="text-red-600 text-bold">{rupees}</span>
            </li>
          </ul>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center">
        <Button
          onClick={() =>
            handleByClick(
              cardName === "Free Membership"
                ? "free"
                : cardName === "Silver Membership"
                ? "silver"
                : "gold"
            )
          }
          className={`${bgColor}  text-white`}
        >
          Choose plan
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardWithForm;
