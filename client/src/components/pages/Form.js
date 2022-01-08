import React from "react";

const Form = () => {
  return (
    <div>
      {/* <form action="/api/users" method="POST" id="add_user"> */}
      <div className="new_user">
        <div className="form-group">
          <label htmlFor="name" className="text-light">
            Name
          </label>
          <input type="hidden" name="id" value="" />
          <input
            type="text"
            name="name"
            value=""
            placeholder="Name..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="text-light">
            Father's Name
          </label>
          <input type="hidden" name="fid" value="" required />
          <input
            type="text"
            name="fname"
            value=""
            placeholder="Father's Name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="text-light">
            Mother's Name
          </label>
          <input type="hidden" name="mid" value="" required />
          <input
            type="text"
            name="mname"
            value=""
            placeholder="Mother's Name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="text-light">
            Personal Email
          </label>
          <input
            type="text"
            name="email"
            value=""
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pEmail" className="text-light">
            Parent's Email
          </label>
          <input
            type="text"
            name="pemail"
            value=""
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact" className="text-light">
            Personal Contact
          </label>
          <input type="text" name="contact" value="" placeholder="" required />
        </div>
        <div className="form-group">
          <label htmlFor="fcontact" className="text-light">
            Parent's Contact
          </label>
          <input type="text" name="pcontact" value="" placeholder="" required />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="text-light">
            Gender
          </label>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-2"
              name="gender"
              value="Male"
              required
            />
            <label htmlFor="radio-2" className="radio-label">
              Male
            </label>
          </div>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-3"
              name="gender"
              value="Female"
              required
            />
            <label htmlFor="radio-3" className="radio-label">
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="text-light">
            Status
          </label>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-4"
              name="status"
              value="Active"
              required
            />
            <label htmlFor="radio-4" className="radio-label">
              Active
            </label>
          </div>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-5"
              name="status"
              value="Inactive"
              required
            />
            <label htmlFor="radio-5" className="radio-label">
              Inactive
            </label>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn text-dark update">
            Save
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Form;
