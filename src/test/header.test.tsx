import Header from "../components/Header/Header";
import { describe, it } from "vitest";
import { render } from "@testing-library/react";

describe("Header component", ()=>{
    it("Renders Header component", ()=>{
        render(<Header/>);
    })
    
})
