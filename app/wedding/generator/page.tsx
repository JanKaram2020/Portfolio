"use client";
import React, { CSSProperties, useState } from "react";
import CommonLayout from "../../../components/Layout";

const GenderForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [language, setLanguage] = useState<"English" | "عربي">("English");

  const handleCopy = () => {
    if (name.length < 2) {
      alert("Please enter valid name");
      return;
    }
    const queryParams = new URLSearchParams();
    queryParams.set("name", name);
    queryParams.set("gender", gender);
    const url = `https://www.jankaram.com/wedding${language === "عربي" ? "/ar" : ""}?${queryParams.toString()}`;
    navigator.clipboard
      .writeText(url)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err));
  };
  const radioStyle: CSSProperties = {
    margin: "0 0 0 10px",
    paddingTop: "10px",
    position: "relative",
  };
  const handleShare = () => {
    if (name.length < 2) {
      alert("Please enter valid name");
      return;
    }
    if (name.length < 2) {
      alert("Please enter valid name");
      return;
    }
    const queryParams = new URLSearchParams();
    queryParams.set("name", name);
    queryParams.set("gender", gender);
    const url = `https://www.jankaram.com/wedding${language === "عربي" ? "/ar" : ""}?${queryParams.toString()}`;
    if (navigator.share) {
      navigator
        .share({
          title: "دعوة الفرح",
          text: url,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <CommonLayout lang={"ar"}>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div className="container mt-5 text-end generator-form" dir="rtl">
            <h3 className="mb-4">صانع الدعوة</h3>
            <form>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  الاسم:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Gender Field */}
              <div className="mb-3">
                <label className="form-label">الجنس:</label>
                <div className="form-check">
                  <input
                    style={radioStyle}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  ></input>
                  <label className="form-check-label" htmlFor="male">
                    ذكر
                  </label>
                </div>
                <div className="form-check">
                  <input
                    style={radioStyle}
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  <label className="form-check-label" htmlFor="female">
                    أنثى
                  </label>
                </div>
              </div>

              {/* Language Field */}
              <div className="mb-3">
                <label className="form-label">اللغة:</label>
                <div className="form-check">
                  <input
                    style={radioStyle}
                    className="form-check-input"
                    type="radio"
                    name="language"
                    id="arabic"
                    value="عربي"
                    checked={language === "عربي"}
                    onChange={() => setLanguage("عربي")}
                  />
                  <label className="form-check-label" htmlFor="arabic">
                    عربي
                  </label>
                </div>
                <div className="form-check">
                  <input
                    style={radioStyle}
                    className="form-check-input"
                    type="radio"
                    name="language"
                    id="english"
                    value="English"
                    checked={language === "English"}
                    onChange={() => setLanguage("English")}
                  />
                  <label className="form-check-label" htmlFor="english">
                    English
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div
                className="d-flex gap-2"
                style={{
                  gap: 2,
                }}
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCopy}
                >
                  نسخ إلى الحافظة
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleShare}
                >
                  مشاركة
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </CommonLayout>
  );
};

export default GenderForm;
