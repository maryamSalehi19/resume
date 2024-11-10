import { supabase } from "@/lib/supabaseClient";

const AboutImage = ({ imageURL, setImageURL }) => {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const fileName = `${new Date().getTime()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("uploads")
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading file:", error.message);
    } else {
      const { data: publicData, error: publicError } = supabase.storage
        .from("uploads")
        .getPublicUrl(data.path);

      if (publicError) {
        console.error("Error getting public URL:", publicError.message);
      } else {
        const publicURL = publicData.publicUrl;
        setImageURL(publicURL);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} accept="image/*" />
      {imageURL && (
        <img src={imageURL} alt="Uploaded Image" width="370" height="240" />
      )}
    </div>
  );
};

export default AboutImage;