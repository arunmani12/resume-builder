import React from "react";
import classes from "./Progress.module.css";
import type {UserAddress,  Name,
  Data} from '../types/progress'


interface InputHolderProps{
    name: string;
    type: string;
    setAddressContent: (
      name: string,
      icon:string,
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    address: UserAddress[];
    icon:string
}

const InputFieldHolder = ({
  name,
  type,
  setAddressContent,
  address,
  icon
}: InputHolderProps): JSX.Element => {
  return (
    <div style={{ width: "48%" }}>
      <label>{name}</label>
      <input
        type={type}
        required
        onChange={(e) => setAddressContent(name,icon,e)}
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

  //fa-solid fa-at --email
  //fa-solid fa-location-dot --loca
  //fa-solid fa-phone-plus --phone
  //fa-solid fa-map-location -st
  //fa-solid fa-road

  const setAddressContent = (
    name: string,
    icon:string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    let item = address.find((d) => d.name === name);
    let value = e.target.value;
    if (item) {
      let index = address.indexOf(item);
      let tmpAddress = [...address];
      tmpAddress[index] = { name, value, icon };
      setObject('address',tmpAddress);
    } else {
      let tmpAddress = [...address];
      tmpAddress.push({ name, value, icon });
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
          icon="fa-solid fa-at"
        />
        <InputFieldHolder
          name="Phone number"
          type="number"
          setAddressContent={setAddressContent}
          address={address}
          icon="fa-solid fa-phone"
        />
      </div>

      <div style={{ marginTop: "1.5rem" }} className={classes["flex-wrapper"]}>
        <InputFieldHolder
          name="City"
          type="text"
          setAddressContent={setAddressContent}
          address={address}
          icon="fa-solid fa-road"
        />
        <InputFieldHolder
          name="State"
          type="text"
          setAddressContent={setAddressContent}
          address={address}
          icon="fa-solid fa-location-dot"
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
          onChange={(e) => setAddressContent("Full Address","fa-solid fa-map-location", e)}
        />
      </div>
    </form>
  );
};

export default Address;
