import {StyleSheet, Text, SafeAreaView, Button, StatusBar} from 'react-native';
import React, {useState, useCallback} from 'react';
import DocumentPicker from 'react-native-document-picker';

const App = () => {
  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);
  const url = fileResponse.map(item => item);

  // let s = url[0];
  // let res = s?.split('/');

  let uploadImage = async () => {
    if (fileResponse != null) {
      const data = new FormData();

      data.append('name', 'Image Upload');
      data.append('file_attachment', url[0].uri);
      console.log(data);

      let res = await fetch(
        'https://api.oilakredit.uz/web/v1/public/forms/file/upload',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(res);
      let responseJson = await res.json();

      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      //if no file selected the show alert

      alert('Please Select File first');
    }
  };
  // if (url.startsWith('content://')) {
  //   const urlComponents = url.split('/');
  //   const fileNameAndExtension = urlComponents[urlComponents.length - 1];
  //   const destPath = `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}`;
  //   // RNFS.copyFile(url, destPath);
  // }

  return (
    <SafeAreaView style={styles.container}>
      {fileResponse?.map((file, index) => (
        <Text key={index.toString()} style={styles.uri}>
          {file?.name}
        </Text>
      ))}
      <Button title="Select 📑" onPress={handleDocumentSelection} />
      <Button title="Upload File" onPress={uploadImage} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
