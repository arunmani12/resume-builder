import React from "react";
import classes from "./Progress.module.css";
import type {UserAddress,  Name,
  Data} from '../types/progress'


interface InputHolderProps{
    name: string;
    type: string;
    setAddressContent: (
      name: string,
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    address: UserAddress[];
}

const InputFieldHolder = ({
  name,
  type,
  setAddressContent,
  address,
}: InputHolderProps): JSX.Element => {
  return (
    <div style={{ width: "48%" }}>
      <label>{name}</label>
      <input
        type={type}
        required
        onChange={(e) => setAddressContent(name, e)}
        value={
          address.find((d) => d.name === name)
            ? address.find((d) => d.name === name)!.value
            : ""
        }
        key={name}
      />
    </div>
  );
};

const Address = ({
  setObject,
  address,
}: {
  setObject: (name:Name,data:Data) => void;
  address: UserAddress[];
}):JSX.Element => {


  const setAddressContent = (
    name: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    let item = address.find((d) => d.name === name);
    let value = e.target.value;
    if (item) {
      let index = address.indexOf(item);
      let tmpAddress = [...address];
      tmpAddress[index] = { name, value, icon: true };
      setObject('address',tmpAddress);
    } else {
      let tmpAddress = [...address];
      tmpAddress.push({ name, value, icon: true });
      setObject('address',tmpAddress);
    }
  };


  return (
    <form style={{ width: "100%" }}>
      <div className={classes["flex-wrapper"]}>
        <InputFieldHolder
          name="Email Address"
          type="email"
          setAddressContent={setAddressContent}
          address={address}
        />
        <InputFieldHolder
          name="Phone number"
          type="number"
          setAddressContent={setAddressContent}
          address={address}
        />
      </div>

      <div style={{ marginTop: "1.5rem" }} className={classes["flex-wrapper"]}>
        <InputFieldHolder
          name="City"
          type="text"
          setAddressContent={setAddressContent}
          address={address}
        />
        <InputFieldHolder
          name="State"
          type="text"
          setAddressContent={setAddressContent}
          address={address}
        />
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <label>Full Address</label>
        <textarea
          rows={5}
          style={{ width: "100%" }}
          value={
            address.find((d) => d.name === 'Full Address')
              ? address.find((d) => d.name === 'Full Address')!.value
              : ""
          }
          onChange={(e) => setAddressContent("Full Address", e)}
        />
      </div>
    </form>
  );
};

export default Address;
