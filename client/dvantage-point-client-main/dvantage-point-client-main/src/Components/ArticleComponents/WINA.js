const WINA = () => {
  return (
    <div className="p-3 container-fluid">
      <div className="text-center">
        <h1 className="text-primary my-4">
          {" "}
          Rewire hybrid workspace with <b>"Digital Colleagues"</b>
        </h1>
      </div>
      <div className="text-center">
        <img
          style={{ width: "60%", height: "30%", margin: "50px" }}
          src="https://media.licdn.com/dms/image/v2/D5612AQEDmCZjZvKYvw/article-cover_image-shrink_720_1280/B56ZdBHgsYHoAU-/0/1749144183918?e=2147483647&v=beta&t=4lFQGrUNtTlOzJdrajtGeWYH17a0P84QHbFVMrrh4Rk"
          alt=""
        />
      </div>

      <div className="row">
        <div className="col-xs-2 col-sm-2 col-lg-2"></div>

        <div
          className="col-xs-8 col-sm-8 col-lg-8 "
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          <p>
            "Unlocking the LLM Revolution: How WINA is Making AI Smarter,
            Faster, and Greener" discusses the critical need for efficient Large
            Language Model (LLM) inference and introduces WINA (Weight Informed
            Neuron Activation) as a significant advancement in this area.
          </p>
          <img
            style={{ width: "100%", height: "auto", margin: "50px" }}
            src="https://media.licdn.com/dms/image/v2/D5612AQF9efljfL2kiQ/article-inline_image-shrink_1500_2232/B56ZdBEUb7GsAU-/0/1749143343112?e=2147483647&v=beta&t=QNukIORQUBDaUgIavxzeVR3DuGBgGaIReSELjo7Gzj4"
            alt=""
          />
          <ul>
            <li>
              <p>
                LLMs are computationally intensive, consuming vast resources
                (power, memory, energy) during "inference" (generating output).
              </p>
            </li>
            <li>
              <p>
                Traditional LLMs activate almost all neurons, leading to
                inefficiency even when many contributions are negligible.
              </p>
            </li>
          </ul>

          <img
            style={{ width: "100%", height: "auto", margin: "50px" }}
            src="https://media.licdn.com/dms/image/v2/D5612AQFElCZohVfk_Q/article-inline_image-shrink_1500_2232/B56ZdBEt42HoAU-/0/1749143445684?e=2147483647&v=beta&t=gO8er7VaPdPn5BIpDgz4XxKAx3OsRcBuP8CXYp4XeAg"
            alt=""
          />

          <ul>
            <li>
              <p>
                <b>Sparse Activation:</b> The general concept of activating only
                critical neurons to reduce computation.
              </p>
            </li>
            <li>
              <p>
                <b>Mixture-of-Experts (MoE):</b> A powerful sparse activation
                method, but requires specialized, lengthy training for existing
                models.
              </p>
            </li>
            <li>
              <p>
                <b>Training-Free Sparse Activation Methods:</b> "Plug-and-play"
                solutions that don't require retraining, offering immediate
                benefits.
              </p>
            </li>
            <li>
              <p>
                <b>Limitation of Previous Training-Free Methods:</b> Many relied
                solely on hidden state magnitudes (how "loud" a neuron's output
                is), often leading to high approximation errors and suboptimal
                accuracy because they ignored the neuron's actual influence on
                subsequent layers.
              </p>
            </li>
          </ul>

          <img
            style={{ width: "100%", height: "auto", margin: "50px" }}
            src="https://media.licdn.com/dms/image/v2/D5612AQFSwbg5eeh__A/article-inline_image-shrink_1500_2232/B56ZdBFYEIGQAc-/0/1749143618526?e=2147483647&v=beta&t=19cQAWkyqazQhUw4D6V1WZEBLrIzwuLbAGWxhasQ7AQ"
            alt=""
          />

          <h5>WINA (Weight Informed Neuron Activation):</h5>
          <ul>
            <li>
              <p>
                <b>Novel Approach:</b> WINA is a training-free sparse activation
                framework that jointly considers: <b>Hidden state magnitudes</b>
                : The neuron's immediate output "loudness."{" "}
                <b>Column-wise ℓ2-norms of weight matrices</b>: The collective
                "importance" or "influence" that a neuron has on all neurons in
                the next layer.
              </p>
            </li>
            <li>
              <p>
                <b>Why it's a Game-Changer:</b> By combining these, WINA gets a
                more accurate picture of a neuron's true contribution, enabling
                smarter activation decisions. This leads to optimal
                approximation error bounds and tighter theoretical guarantees.
              </p>
            </li>
          </ul>

          <img
            style={{ width: "100%", height: "auto", margin: "50px" }}
            src="https://media.licdn.com/dms/image/v2/D5612AQG0SLA-TUafuA/article-inline_image-shrink_1500_2232/B56ZdBFld5GsAU-/0/1749143673377?e=2147483647&v=beta&t=EoLhW5xtw-jWGTeysfEJyzgxWBaMm2CFAMzzyETIfzg"
            alt=""
          />

          <ul>
            <li>
              <p>
                <b>Empirical Evidence:</b> WINA significantly outperforms
                state-of-the-art methods (like TEAL).
              </p>
            </li>
            <li>
              <p>
                <b> Quantifiable Gain:</b> Achieves up to 2.94% better average
                performance at the same sparsity levels across diverse LLM
                architectures and datasets (like 40% memory reduction and 2.3x
                speed boost mentioned in one search result).
              </p>
            </li>
          </ul>

          <img
            style={{ width: "100%", height: "auto", margin: "50px" }}
            src="https://media.licdn.com/dms/image/v2/D5612AQGwGch2V2NEkA/article-inline_image-shrink_1500_2232/B56ZdBF13AHEAU-/0/1749143740630?e=2147483647&v=beta&t=KcIOAFjssTSfGWkw-FuiTJhOECIN8GOohJsiaaQ2W1E"
            alt=""
          />

          <ul>
            <li>
              <p>
                <b>Faster LLM Responses:</b> Direct reduction in inference time.
              </p>
            </li>
            <li>
              <p>
                <b>Reduced Operational Costs:</b> Lower computing resource
                consumption for deployment.
              </p>
            </li>
            <li>
              <p>
                <b>Greener AI:</b> Less energy usage contributes to
                sustainability.
              </p>
            </li>
            <li>
              <p>
                <b>Wider Accessibility:</b> Opens possibilities for running
                advanced LLMs on less powerful "edge" devices.
              </p>
            </li>
            <li>
              <p>
                <b>New Frontier:</b> WINA sets a robust new baseline for
                training-free sparse activation, advancing the field and paving
                the way for future innovations in efficient LLM inference.
              </p>
            </li>
          </ul>
        </div>

        <div className="col-xs-2 col-sm-2 col-lg-2"></div>
      </div>

      <div className="text-center p-1 my-5 ">
        <p>
          <small>© 2019-2025 DVANTAGEPOINT LIMITED</small>
        </p>
      </div>
    </div>
  );
};

export default WINA;
