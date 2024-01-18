// ** React Imports
import { useState, useRef, useEffect } from "react";

// ** Reactstrap Imports
import { Button, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

// ** Third Party Imports
import { DownloadCloud, FileText, X } from "react-feather";
import { toast } from "react-toastify";
import { BE_URL } from "./config";

const FileUploaderMultiple = ({
  inputData,
  setInputData,
  id,
  data,
  onChangeRadio,
  isNA,
  isDocumentCreated,
  refetch,
  updateMutation,
  setRiskData,
  position,
  vendorId,
  isVendorFiled,
}) => {
  const [fileList, setFileList] = useState([]);
  const [selectFile, setSelectFile] = useState(false);
  const fileRef = useRef(null);
  const [NA, setNA] = useState(isNA);
  const [documentCreated, setDocumentCreated] = useState(isDocumentCreated);
  const uniqueId = isVendorFiled ? data?.[position]?.vendorId : "";

  useEffect(() => {
    if (!isVendorFiled) {
      if (data?.length > 0) {
        setFileList(data);
        setSelectFile(true);
      }
    } else {
      if (data?.[position]?.value?.length > 0) {
        setFileList(data?.[position]?.value);
        setSelectFile(true);
      }
    }
  }, [data]);

  const renderFilePreview = (file) => {
    if (file?.type?.startsWith("image")) {
      return (
        <img
          className="rounded"
          alt=""
          src={
            file?.path?.search(";base64,") == -1
              ? file?.path?.lastIndexOf("https://") !== -1 ||
                file?.path?.lastIndexOf("http://") !== -1
                ? file?.path
                : `${BE_URL}/${file?.path}`
              : file?.path
          }
          height="28"
          width="28"
        />
      );
    } else {
      return <FileText size="28" />;
    }
  };

  const renderFileSize = (size) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`;
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`;
    }
  };

  const renderFileList = () => {
    const filesData = fileList?.map((file, index) => {
      return (
        <ListGroupItem
          key={`${file?.name}-${index}`}
          className="d-flex align-items-center justify-content-between"
        >
          <div className="file-details d-flex align-space-between">
            <div className="file-preview me-1">{renderFilePreview(file)}</div>
            <div>
              <p className="file-name mb-0">{file?.name}</p>
              <p className="file-size mb-0">{renderFileSize(file?.size)}</p>
            </div>
          </div>

          <div className="d-flex align-items-center ">
            <Button
              color="danger"
              outline
              size="sm"
              className="btn-icon"
              onClick={() => handleRemoveFile(file)}
            >
              <X size={15} />
            </Button>
            <Button
              color="primary"
              outline
              size="sm"
              className="btn-icon ms-2"
              onClick={() => downloadFile(file)}
            >
              <DownloadCloud size={15} />
            </Button>
          </div>
        </ListGroupItem>
      );
    });
    return filesData;
  };

  const handleRemoveFile = (file) => {
    const uploadedFiles = fileList;
    const filtered = uploadedFiles.filter((i) => i?.name !== file?.name);
    setFileList([...filtered]);
    let values = [...inputData];
    const ind = values?.findIndex((p) => p.id === id);
    if (ind != undefined && ind >= 0) {
      isVendorFiled
        ? (values[ind].value[position].value = filtered)
        : (values[ind].value = filtered);
    } else {
      values = [...values, { id, value: filtered }];
    }
    setInputData(values);
  };
  const downloadFile = (file) => {
    const URL = `${BE_URL}/download/${file?.path}`;

    fetch(URL).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = `${file?.name}`;
        a.click();
      });
    });
  };

  const handleRemoveAllFiles = () => {
    setFileList([]);
    let values = [...inputData];
    const ind = values?.findIndex((p) => p.id === id);
    if (ind != undefined && ind >= 0) {
      isVendorFiled
        ? (values[ind].value[position].value = [])
        : (values[ind].value = []);
    } else {
      values = [...values, { id, value: [] }];
    }

    setInputData(values);
  };
  const onFileChange = async (event) => {
    const files = event.currentTarget.files;
    const filesData = [];

    await Object.keys(files).map((i, index) => {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        filesData.push({
          name: file?.name,
          path: e.target.result,
          size: file?.size,
          type: file?.type,
        });
        if (filesData?.length == files?.length) {
          setFileList([...fileList, ...filesData]);
          let values = [...inputData];
          const ind = values?.findIndex((p) => p.id === id);
          if (!isVendorFiled) {
            if (ind != undefined && ind >= 0) {
              values[ind].value = [...fileList, ...filesData];
            }
            setInputData(values);
          } else {
            if (ind != undefined && ind >= 0) {
              values[ind].value[position] = {
                vendorId: vendorId?.[position],
                isNA: false,
                isDocumentCreated: false,
                value: [...fileList, ...filesData],
              };
            }
            setInputData(values);
          }
        }
      };
      reader.readAsDataURL(file);
    });

    if (!isVendorFiled) {
      let values = [...inputData];
      const ind = values?.findIndex((p) => p.id === id);
      if (ind != undefined && ind >= 0) {
        values[ind].value = fileList;
      } else {
        values = [...values, { id, value: fileList }];
      }

      setInputData(values);
    } else {
      let values = [...inputData];
      const ind = values?.findIndex((p) => p.id === id);
      if (ind != undefined && ind >= 0) {
        values[ind].value[position] = {
          vendorId: vendorId?.[position],
          isNA: false,
          isDocumentCreated: false,
          value: fileList,
        };
      } else {
        values = [
          ...values,
          {
            id,
            value: [
              {
                vendorId: vendorId?.[position],
                isNA: false,
                isDocumentCreated: false,
                value: fileList,
              },
            ],
          },
        ];
      }

      setInputData(values);
    }
  };

  const onChangeFileOption = (e, id) => {
    setSelectFile(true);
    if (e.target.checked && !isVendorFiled) {
      updateMutation({
        variables: {
          input: {
            id,
            isNA: false,
            isDocumentCreated: false,
          },
        },
      })
        .then((response) => {
          if (response?.data?.updateBusinessFunctionFieldValue) {
            if (inputData?.length) {
              setRiskData(() => {
                return inputData;
              });
            }
            refetch();
          } else {
          }
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      let values = [...inputData];
      const ind = values?.findIndex((p) => p.id === id);
      if (ind != undefined && ind >= 0) {
        values[ind].value[position] = {
          vendorId: vendorId?.[position],
          isNA: false,
          isDocumentCreated: false,
          value: [],
        };
      }
    }
  };

  return (
    <div>
      <div className="form-group">
        <div
          className="d-flex align-items-center w-100"
          style={{ justifyContent: "space-between" }}
        >
          <Label
            for={`radio1-${id}-${uniqueId}`}
            className="form-check-label"
            style={{ marginLeft: 5, marginRight: 5 }}
          >
            <Input
              type="radio"
              name={`radio-upload-${id}-${uniqueId}`}
              defaultChecked={isVendorFiled ? data?.[position]?.isNA : isNA}
              style={{ borderColor: "#212121", marginRight: 4 }}
              className="custom-control-Primary fw-bold"
              id={`radio1-${id}-${uniqueId}`}
              onChange={(e) => {
                onChangeRadio(e, id, "NA"),
                  setFileList([]),
                  isVendorFiled ? (setSelectFile(false), setNA(true)) : null;
              }}
            />
            N/A
          </Label>
          <Label
            for={`radio2-${id}-${uniqueId}`}
            className="form-check-label"
            style={{ marginLeft: 5, marginRight: 5 }}
          >
            <Input
              type="radio"
              name={`radio-upload-${id}-${uniqueId}`}
              defaultChecked={
                isVendorFiled
                  ? data?.[position]?.isDocumentCreated
                  : isDocumentCreated
              }
              style={{ borderColor: "#212121", marginRight: 4 }}
              className="custom-control-Primary fw-bold"
              id={`radio2-${id}-${uniqueId}`}
              onChange={(e) => {
                onChangeRadio(e, id, "DocumentCreated"),
                  setFileList([]),
                  isVendorFiled
                    ? (setSelectFile(false), setDocumentCreated(true))
                    : null;
              }}
            />
            Document not created
          </Label>
          <Label
            for={`radio3-${id}-${uniqueId}`}
            className="form-check-label"
            style={{ marginLeft: 5, marginRight: 5 }}
          >
            <Input
              type="radio"
              name={`radio-upload-${id}-${uniqueId}`}
              defaultChecked={
                isVendorFiled
                  ? !data?.[position]?.isDocumentCreated &&
                    !data?.[position]?.isNA &&
                    data?.length
                  : !isDocumentCreated && !isNA
              }
              style={{ borderColor: "#212121", marginRight: 4 }}
              className="custom-control-Primary fw-bold"
              id={`radio3-${id}-${uniqueId}`}
              onChange={(e) => onChangeFileOption(e, id)}
            />
            Upload file
          </Label>
          <Button
            id={isVendorFiled ? uniqueId : id}
            onClick={() => {
              fileRef.current.click();
            }}
            outline
            style={{ marginTop: 5, borderRadius: 4, width: 150 }}
            disabled={
              isVendorFiled
                ? selectFile
                  ? !selectFile
                  : NA || documentCreated
                  ? true
                  : false
                : isNA || isDocumentCreated
            }
          >
            Select file
          </Button>
          <input
            type="file"
            accept=".xlsx,.xls,.doc,.docx,.pdf"
            style={{ display: "none" }}
            ref={fileRef}
            multiple
            onChange={(e) => onFileChange(e)}
          />
        </div>
      </div>
      <div>
        {fileList && fileList?.length > 0 && (
          <ListGroup className="my-2">{renderFileList()}</ListGroup>
        )}
        {fileList && fileList?.length > 1 && (
          <div className="d-flex justify-content-end">
            <Button
              className="me-1"
              color="danger"
              outline
              onClick={handleRemoveAllFiles}
            >
              Remove All
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploaderMultiple;
