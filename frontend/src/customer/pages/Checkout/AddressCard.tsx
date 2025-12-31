import { Radio } from "@mui/material";

const AddressCard = ({ value, selectedValue, handleChange, item }: any) => {
  return (
    <div className="p-5 border border-gray-300 rounded-md flex ">
      <div>
        <Radio
          checked={value == selectedValue}
          onChange={handleChange}
          value={value}
          name="radio-buttons"
        />
      </div>

      <div className="space-y-3 pt-3">
        <h1>{"Abhi Kumar"}</h1>
        <p className="w-[320px]">
          {"saraimeer"},{"Mirzapur"},{"Azamgarh"},{"Uttar Pradesh"} - {"276305"}
        </p>
        <p>
          <strong>Mobile : </strong> 9265227411
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
