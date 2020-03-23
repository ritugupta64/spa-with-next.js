import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

const textualMeaning = () => {
  return (
    <Layout>
      <PageTitle title = "Notification Accessible" />
      <div className="inner-container">
        <h3>Every interactive element should have a textual implementation</h3>
        <button className="button-error" aria-label="there is an error">
          <svg viewBox="0 0 453.415 453.416">
            <path
              d="M344.373,133.15c-3.971,0-7.201,3.23-7.201,7.202s3.23,7.203,7.201,7.203c3.973,0,7.203-3.231,7.203-7.203
			S348.346,133.15,344.373,133.15z"
            />
            <path
              d="M337.828,87.162v35.733c0,3.608,2.938,6.545,6.545,6.545c3.611,0,6.547-2.937,6.547-6.545V87.162
			c0-3.609-2.936-6.545-6.547-6.545C340.766,80.617,337.828,83.553,337.828,87.162z"
            />
            <path
              d="M451.096,167.386L359.346,9.978c-3.053-5.237-8.657-8.457-14.719-8.457c-6.061,0-11.666,3.22-14.717,8.457l-42.867,73.541
			H13.25C5.93,83.519,0,89.454,0,96.771v242.48c0,7.32,5.93,13.252,13.25,13.252h202.672v86.137c0,5.359,3.229,10.193,8.182,12.244
			c1.639,0.68,3.359,1.01,5.066,1.01c3.447,0,6.84-1.348,9.373-3.883l96.172-95.508h56.976c7.319,0,13.254-5.932,13.254-13.252
			v-146.25h31.436c6.098,0,11.732-3.26,14.771-8.549C454.189,179.164,454.168,172.655,451.096,167.386z M282.525,158.929
			l62.102-106.542l62.102,106.542H282.525z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default textualMeaning;
