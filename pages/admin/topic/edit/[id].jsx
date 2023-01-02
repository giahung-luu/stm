import { useState, useEffect } from "react";
import { getTopicById, editTopic } from "../../../../services/topicService";
import { notify } from "../../../../components";

function EditTopic({ params }) {
  const { id } = params;
  const [post, setTopic] = useState({});

  useEffect(() => {
    if (id) {
      getTopicById(id).then((res) => {
        setTopic(res[0]);
      });
    }
  }, [id]);

  const handleUpdateTopic = (e) => {
    e.preventDefault();
    const {
      content
    } = e.target;
    var result = editTopic(
      id,
      content.value,
      post.topic
    );
    if (result) {
      notify("Cập nhật nội dung thành công", "success");
    } else {
      notify("Cập nhật nội dung thất bại", "error");
    }
  }
  return (
    <>
      <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-b-6 tw-shadow-lg tw-rounded tw-bg-white">
        <div className="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
          <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between">
            <div className="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex-grow tw-flex-1">
              <h3 className="tw-font-semibold tw-text-lg tw-text-blueGray-700">
                Chỉnh sửa bài viết
              </h3>
            </div>
          </div>
        </div>

        {post.id && (
          <form
            className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-white tw-outline-none tw-focus:outline-none"
            onSubmit={handleUpdateTopic}
          >
            <div className="tw-relative tw-p-6 tw-flex-auto">
              <div>
                Tiêu đề: {post.topic}
              </div>
              <div>
                <label htmlFor="content" className="tw-block">
                  Nội dung
                </label>
                <textarea
                  name="content"
                  rows="4"
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                  required={true}
                  defaultValue={post.content}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="tw-flex tw-items-center tw-justify-end tw-p-6 tw-border-t tw-border-solid tw-border-blueGray-200 tw-rounded-b">
              <button
                className="tw-bg-lightBlue-500 tw-text-white active:tw-bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
EditTopic.layout = "admin";
export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
export default EditTopic;
