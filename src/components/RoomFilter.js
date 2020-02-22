import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
//get all unique valie
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique types
    let types = getUnique(rooms, "type");
    //add all
    types = ["all", ...types];
    //map tp jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => {
        return (
            <option key={index} value={item}>
                {item}
            </option>
        );
    });
    return (
        <section className="filter-container">
            <Title title="search Rooms"></Title>
            <form action="" className="filter-form">
                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={context.handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* End Select Type */}
                {/* Guest Type */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={context.handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* end quest */}

                {/* Room price */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={context.handleChange}
                        className="form-control"
                    />
                </div>
                {/* End of Room price */}
                {/* Size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            onChange={context.handleChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            onChange={context.handleChange}
                            className="size-input"
                        />
                    </div>
                </div>
                {/* End of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={context.handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={context.handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    );
}