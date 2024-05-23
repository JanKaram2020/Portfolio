import { describe, expect, it } from "vitest";
import renderer from "react-test-renderer";
import Eargasm from "app/project/eargasm/page";
import TestTable from "app/project/test-table/page";
import WouldYouRather from "app/project/would-you-rather/page";
import WritingByLilyanne from "app/project/writing-by-lilyanne/page";
import IndexPage from "app/home";
import ResumePage from "app/resume/page";

describe("pages", () => {
  it("should Eargasm match snapshot", () => {
    const tree = renderer.create(<Eargasm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should TestTable match snapshot", () => {
    const tree = renderer.create(<TestTable />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should WouldYouRather match snapshot", () => {
    const tree = renderer.create(<WouldYouRather />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should WritingByLilyanne match snapshot", () => {
    const tree = renderer.create(<WritingByLilyanne />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should IndexPage match snapshot", () => {
    const tree = renderer.create(<IndexPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should ResumePage match snapshot", () => {
    const tree = renderer.create(<ResumePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
