import { createElement, ReactElement } from "react";
import CustomDropdownComp from "./components/CustomDropdownComp";

import { CustomDropdownContainerProps } from "../typings/CustomDropdownProps";

import "./ui/SingleSelector.css";

export default function CustomDropdown(props: CustomDropdownContainerProps): ReactElement{
    return  <CustomDropdownComp 
                defaultValue={props.defaultValue}
                firstLabel={props.firstLabel}
                secondLabel={props.secondLabel}
                imgUrl={props.imgUrl}
                options={props.options}
                contextObjLabel={props.contextObjLabel}
                selectOption={props.selectOption}
                enableCreate={props.enableCreate}
                createValue={props.createValue}
                enableClear={props.enableClear}
                clearValue={props.clearValue}
                enableSearch={props.enableSearch}
                useAvatar={props.useAvatar}
                useDefaultStyle={props.useDefaultStyle}
                placeholder={props.placeholder}
                className={props.className}
                classNamePrefix={props.classNamePrefix}
                menuHeight={props.menuHeight}
                onFocus={props.onFocus}
            />;
}