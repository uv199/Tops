import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputProduct from "./InputProduct";
import { Check, IndianRupee } from "lucide-react";

function ProducttModal({
  modal,
  toggle,
  refresHandler,
  produc,
  setProduc,
  updatemod,
  intialProduc,
  setUpdatemod,
  previewdata,
  chek
}) {
  console.log(previewdata);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {chek === false ? (
            <InputProduct
              togle={toggle}
              refresHandle={refresHandler}
              product={produc}
              setProduct={setProduc}
              updatemode={updatemod}
              intialProduct={intialProduc}
              setUpdatemode={setUpdatemod}
            />
          ) : (
            <>
              {previewdata?.map((e) => {
                return (
                  <div>
                    <div className="flex justify-content-center my-3">
                      <img src={e.thumbnail} alt="" />
                    </div>
                    <div className="flex gap-10 justify-content-center  ">
                      <div>
                        <p>Title:-{e?.title}</p>
                        <p>description:-{e.description}</p>
                        <p>Gender:-{e?.gender}</p>

                        <div className="flex items-center">
                          <div>Color:- </div>
                          <div className="flex gap-2 ms-2">
                            {e?.color.map((color, i) => {
                              return (
                                <div
                                  style={{
                                    height: "15px",
                                    width: "15px",
                                    border: "1px solid black",
                                    // borderRadius: "50%",
                                    backgroundColor: color,
                                  }}
                                  key={i}
                                ></div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>category:- {e.category.map((e) => e).join(" / ")}</p>
                        <p className="flex gap-3">
                          <span>Size:- </span>
                          <div className="d-flex gap-2">
                            {["41", "42", "43", "44", "45"].map((ee, i) => {
                              return (
                                <div
                                  key={i}
                                  style={
                                    e.size.includes(ee)
                                      ? {
                                          backgroundColor: "green",
                                          color: "white",
                                        }
                                      : {
                                          backgroundColor: "gray",
                                          color: "white",
                                        }
                                  }
                                >
                                  {ee}
                                </div>
                              ); /* first  Task*/
                            })}
                          </div>
                        </p>
                        <p className="flex items-center "><span className="px-2">Price:</span><IndianRupee size={15} /> {e.price} </p>
                        <p>discountPercentage:- {e?.discountPercentage} %</p>
                      </div>
                    </div>
                    <Button className="w-100" style={{backgroundColor:"blue"}}>Order now</Button>
                  </div>
                );
              })}{" "}
            </>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ProducttModal;
