import React from "react";

const UpdateUser = () => {
  return (
    <main id="site-main">
      <div className="container">
        <div className="box-nav d-flex justify-between">
          <div className="filter">
            <a href="/">
              <i className="fas fa-angle-double-left"></i> All Users
            </a>
          </div>
        </div>
        <br />
        <hr />
        <div className="form-title text-center">
          <h2 className="text-dark">Update User Record</h2>
        </div>

        <form method="POST" id="update_user">
          <div className="new_user">
            <div className="form-group">
              <label htmlFor="name" className="text-light">
                Name
              </label>
              <input type="hidden" name="id" value="<%= user._id %>" />
              <input
                type="text"
                name="name"
                value="<%= user.name %>"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" className="text-light">
                Father's Name
              </label>
              <input type="hidden" name="pid" value="<%= user._pid %>" />
              <input
                type="text"
                name="fname"
                value="<%= user.fname %>"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" className="text-light">
                Mother's Name
              </label>
              <input type="hidden" name="pmid" value="<%= user._mid %>" />
              <input
                type="text"
                name="mname"
                value="<%= user.mname %>"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email" className="text-light">
                Student's Email
              </label>
              <input
                type="text"
                name="email"
                value="<%= user.email%>"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pEmail" className="text-light">
                Parents's Email
              </label>
              <input
                type="text"
                name="pemail"
                value="<%= user.pemail%>"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact" className="text-light">
                Personal Contact
              </label>
              <input
                type="text"
                name="contact"
                value="<%= user.contact%>"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="fcontact" className="text-light">
                Father's Contact
              </label>
              <input
                type="text"
                name="fcontact"
                value="<%= user.fcontact%>"
                placeholder=""
              />
            </div>

            <div className="form-group">
              <label htmlFor="mcontact" className="text-light">
                Mother's Contact
              </label>
              <input
                type="text"
                name="mcontact"
                value="<%= user.mcontact%>"
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="text-light">
                Gender
              </label>
              <div className="radio inline">
                <input type="radio" id="radio-2" name="gender" value="Male" />
                <label htmlFor="radio-2" className="radio-label">
                  Male
                </label>
              </div>
              <div className="radio inline">
                <input type="radio" id="radio-3" name="gender" value="Female" />
                <label htmlFor="radio-3" className="radio-label">
                  Female
                </label>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn text-dark update">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UpdateUser;
