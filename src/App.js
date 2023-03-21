import React, { Component, useContext, useReducer } from "react";

// import TimerMountUnmount from "./testPage/timerMountUnmount/TimerMountUnmount";
import MousePosition from "./testPage/mousePosition/MousePosition";
// import Test from "./testPage/mousePosition/test";
// import Unmount from "./testPage/timerMountUnmount/unmount";
import DataFetch from "./testPage/dataFetch/DataFetch";
// import ContextWork from "./testPage/contextHook/ContextWork";
// import Counter1 from "./testPage/counter/counter1";
// import Counter2 from "./testPage/counter/counter2";
// import Counter3 from "./testPage/counter/counter3";
// import ComponentA from "./testPage/counter/ContextCounter/componentA";
// import Fetchdata from "./testPage/dataFetchWithLodingError/dataFetchWithLoadingError";
import FetchDataReducer from "./testPage/dataFetchWithLodingError/dataFetchUseReducer";
//import UseCallBack from "./testPage/useCallBack/UseCallBack";
import UseMemo from "./testPage/useMemo/UseMemo";
// import UseRef from "./testPage/useRef/UseRef";
import CheckRef from "./testPage/useRef/CreateRef";
// import CustomHook1 from "./testPage/customHook/CustomHook1";
// import CustomHook2 from "./testPage/customHook/CustomHook2";
// import CustomHookInput from "./testPage/customHookInputField/customHookInputField";
// import ParentComponent from "./testPage/memo/ParentComponent";
// import FunctionType from "./testPage/function/Function";
// import FileA from "./testPage/highOrderFunction/FileA";
// import FileB from "./testPage/highOrderFunction/FileB";
// import FWRef from "./testPage/ForwardRef/FWRef";

// import CompA from "./testPage/renderProps/ComponentA";
// import CompB from "./testPage/renderProps/ComponentB";
// import UserProp from "./testPage/renderProps/UserProp";

import ComponentA from "./testPage/contextApi/ComponentA";
import ComponentC from "./testPage/contextApi/ComponentC";

// import FormPost from "./testPage/httpPost/FormPost";
// import Home from "./testPage/router/Home";
//

// import LoginHome from "./testPage/loginPage/Home";
// import Popup from "./testPage/popup/Popup";
// import Form from "./testPage/form/Form";

// import CounterDelay from "./testPage/counterDelay/CounterDelay";
// import Windowresize from "./testPage/windowResize/Windowresize";
// import Fetchdata from "./testPage/FetchData_async/Fetchdata";
// import FormArray from "./testPage/formArray/FormArray";
// import Formdynamic from "./testPage/formdynamic/FomrDynamic";
// import Usereducer from "./testPage/useReducer/UseReducer";
// import CheckWidth from "./testPage/isDesktop/CheckWidth";
// import ComponentA from "./testPage/protoTypes/ComponentA";

// ---------------Project Folder Exercise--------------
// import BirthdayAlarm from "./projects/birthdayAlarmOLD/BirthdayAlarm";
// import MyTour from "./projects/fetchData/MyTour";
// import Reviews from "./projects/reviews/Reviews";
// import Accordion from "./projects/accordion/Accordion";
import FoodMenu from "./projects/foodMenu/FoodMenu";
import Routingpage from "./projects/Routingpages/Project1Home";
import Tabscontents from "./projects/tabs/Tabscontent";
import Slider from "./projects/slider/Slider";
import Paragenerator from "./projects/paragraphsGenerator/ParaGenerator";
import Grocerylist from "./projects/groceryItems/Grocerylist";
import Navbar from "./projects/navbar/Navbar";
import SideNavPopup from "./projects/contextAPI/SideNavandPopup";
import Menustrip from "./projects/menuStrip/Menustrip";
import Cartpage from "./projects/cart/Mainpage";

//start with useState()
import StartWork from "./projects/starter/StartWork";
import RendomError from "./projects/useState/rendomTitle/RendomTitle";
import ArrayExample from "./projects/useState/arrayExample/ArrayExample";
import ObjectExample from "./projects/useState/objectExample/ObjectExample";
import Counter from "./projects/useState/counter/Counter";

//start with useEffect()
import Example1 from "./projects/useEffect/example1/Example1";
import CleanupFunction from "./projects/useEffect/cleanupFunction/CleanupFunction";
import FetchData from "./projects/useEffect/fetchData/FetchData";
import MultipleReturn from "./projects/useEffect/multiplrReturn/MultipleReturn";
import FetchDataWithError from "./projects/useEffect/fetchData/FetchDataWithError";
import ShortCircuteMethod from "./projects/shortCircuteMethod/ShortCircuteMethod";

// form submit
import FormSubmit from "./projects/formSubmit/FormSubmit";

// useref
import UseRefExample from "./projects/useRef/UseRefExample";

// useReducer
import UseReducerEx from "./projects/useReducer/UseReducerEx";
import Test from "./projects/useReducer/test";

// Prop Drilling
import PropDrill from "./projects/propsDrill/";

// context Api
import UseContext from "./projects/useContext";

//useFetch
import UseFetch from "./projects/useFetch";

//useRouter
import UseRouter from "./projects/useRouter";

//memo ......it will update the counter and do not rerender the list (console.log)
import Memo from "./projects/memo";

//useCallback
import UseCallback from "./projects/useCallback";

// Redux
import ReduxEx from "./projects/redux";

// Basic Project
import Birthdayalarm from "./projects/birthday-alarm";
import Tour from "./projects/tours-api"; // API Call with loading
import Accordion from "./projects/accordion";
import FoodMenuNew from "./projects/foodMenuNew/FoodMenuNew";
import TabcontentNew from "./projects/tabsNew/TabContentNew";
import SliderNew from "./projects/sliderNew/SliderNew";
import Generrator from "./projects/paragraphNew/Generator";
import FoodItems from "./projects/groceryNew/FoodItem";
import SidebarModal from "./projects/sidebarModal";
import Randomuser from "./projects/randomUser";
import NewCart from "./projects/newCart";
import Pagination from "./projects/pagination";
//--------------
import ReduxThapa from "./projects/reduxThapa";
import TestRedux from './projects/test-redux/Test';
import TestContext from './projects/test-context/TestContext'
import Calculator from './projects/calculator/Calculator'

//==============

function Main() {
  return (
    <div className="App">
      <Pagination />
      {/* <Calculator /> */}
    </div>
  );
}

export default Main;
