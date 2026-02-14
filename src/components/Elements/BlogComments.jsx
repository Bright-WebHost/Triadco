import React from 'react';
import { NavLink } from 'react-router-dom';

class BlogComments extends React.Component {
    render() {
        return (
            <>
                <div className="clear" id="comment-list">
                    <div className="comments-area" id="comments">
                        <h2 className="comments-title">4 Comments</h2>
                        <div className="p-tb30">
                            {/* COMMENT LIST START */}
                            <ol className="comment-list">
                                <li className="comment">
                                    {/* COMMENT BLOCK */}
                                    <div className="comment-body">
                                        <div className="comment-meta">
                                            <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                        </div>
                                        <div className="comment-author vcard">
                                            <img className="avatar photo" src={require("./../../images/testimonials/pic1.jpg")} alt=""/>
                                            <cite className="fn">Federico</cite>
                                            <span className="says">says:</span>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                        <div className="reply">
                                            <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li className="comment">
                                    {/* COMMENT BLOCK */}
                                    <div className="comment-body">
                                        <div className="comment-meta">
                                            <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                        </div>
                                        <div className="comment-author vcard">
                                            <img className="avatar photo" src={require("./../../images/testimonials/pic4.jpg")} alt="" />
                                            <cite className="fn"> Schiocchet </cite>
                                            <span className="says">says:</span>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                        <div className="reply">
                                            <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                        </div>
                                    </div>
                                    {/* SUB COMMENT BLOCK */}
                                    <ol className="children">
                                        <li className="comment odd parent">
                                            <div className="comment-body">
                                                <div className="comment-meta">
                                                    <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                                </div>
                                                <div className="comment-author vcard">
                                                    <img className="avatar photo" src={require("./../../images/testimonials/pic3.jpg")} alt=""/>
                                                    <cite className="fn">Brayden</cite>
                                                    <span className="says">says:</span>
                                                </div>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                                <div className="reply">
                                                    <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                                </div>
                                            </div>
                                            <ol className="children">
                                                <li className="comment odd parent">
                                                    <div className="comment-body">
                                                        <div className="comment-meta">
                                                            <NavLink to={"#"}>20 June 2019 at 8:15 am</NavLink>
                                                        </div>
                                                        <div className="comment-author vcard">
                                                            <img className="avatar photo" src={require("./../../images/testimonials/pic2.jpg")} alt=""/>
                                                            <cite className="fn">Diego</cite>
                                                            <span className="says">says:</span>
                                                        </div>
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                                        <div className="reply">
                                                            <NavLink to={"#"} className="comment-reply-link letter-spacing-2 text-uppercase">Reply</NavLink>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            {/* COMMENT LIST END */}
                            {/* LEAVE A REPLY START */}
                            <div className="comment-respond m-t30" id="respond">
                                <h2 className="comment-reply-title" id="reply-title">Leave a Comments
                <small>
                                <NavLink to={""} style={{ display: 'none' }} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                                    </small>
                                </h2>
                                <form className="comment-form bdr-1 bdr-solid bdr-gray p-a20" id="commentform" method="post" action="">
                                    <p className="comment-form-author">
                                        <label htmlFor="author">Name <span className="required">*</span></label>
                                        <input className="form-control" type="text" defaultValue={""} name="user-comment" placeholder="Author" id="author" />
                                    </p>
                                    <p className="comment-form-email">
                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                        <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Email" id="email" />
                                    </p>
                                    <p className="comment-form-url">
                                        <label htmlFor="url">Website</label>
                                        <input className="form-control" type="text" defaultValue={""} name="url" placeholder="Website" id="url" />
                                    </p>
                                    <p className="comment-form-comment">
                                        <label htmlFor="comment">Comment</label>
                                        <textarea className="form-control" rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                                    </p>
                                    <p className="form-submit">
                                        <button className="site-button button-sm radius-no text-uppercase font-weight-600" type="button">Submit</button>
                                    </p>
                                </form>
                            </div>
                            {/* LEAVE A REPLY END */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default BlogComments;