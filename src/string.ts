/**
 *
 * @param str string whose length we need to check
 * @param minLength minimum length the str needs to be
 * 
 * @returns boolean if str is of valid length or not
 */
export function isValidLength(str: string, minLength: number) {
    return str.length < minLength
}


/**
 * Checks to see if the email is valid or not
 * @param email The email
 * @see https://emailregex.com/ for information on email regex
 * @returns A boolean depending on the format of the email
 */
export const isValidEmail = (email: string) => {
    return new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ).test(email);
}

export function removeFileExtension(filename: string) {
    if (!filename || filename.indexOf(".") === -1) {
      return filename;
    }
  
    if (filename.startsWith(".") && filename.lastIndexOf(".") === 0) {
      return filename;
    }
  
    return filename.substring(0, filename.lastIndexOf("."));
  }