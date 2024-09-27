import cls from './Avatar.module.scss';
import { IAvatarProps } from './Avatar.props';
import { ChangeEvent, useRef, useState, useEffect } from 'react';
import { classNames } from '@helpers';

export const Avatar = ({
                           size = 'medium',
                           src,
                           edit = false,
                           onChange,
                           value,
                           className,
                       }: IAvatarProps) => {
    const [imageSrc, setImageSrc] = useState<string | null>(src || (value ? URL.createObjectURL(value) : null));
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Handle file input change
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageSrc(URL.createObjectURL(file)); // Update the displayed image
            onChange?.(file); // Send the selected file outside
        }
    };

    // Cleanup object URLs when component unmounts or image changes
    useEffect(() => {
        return () => {
            if (imageSrc) {
                URL.revokeObjectURL(imageSrc);
            }
        };
    }, [imageSrc]);

    // Trigger file input when edit button is clicked
    const handleEditClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <div className={classNames(cls.avatar, { [cls[size]]: size }, [])}>
                {imageSrc ? (
                    <img src={imageSrc} alt="Avatar" className={cls.img} />
                ) : (
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={cls.icon}>
                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path className={cls.a}
                                  d="M6.7286,40.2168c.7156-2.6341-1.0121-14.7379,2.4364-20.1389-1.68-2.59-3.762-4.6208-3.4417-8.744L4.5,7.7832A16.4911,16.4911,0,0,0,12.1841,10.54a11.1491,11.1491,0,0,1,5.1387,1.5334A14.4977,14.4977,0,0,1,31.4712,11.76c1.4755-1.1177,7.023-1.52,7.5785-1.806A13.654,13.654,0,0,0,43.5,7.9434a14.199,14.199,0,0,0-1.07,3.578,14.2,14.2,0,0,1-2.8487,7.9192c3.537,6.0519,1.7753,18.5033,2.4875,20.7217" />
                            <path className={cls.a}
                                  d="M5.1883,8.659c2.2491,3.762,8.2055,4.6071,9.8889,6.7027a14.0857,14.0857,0,0,1,6.12-3.2917" />
                            <path className={cls.a} d="M15.0738,15.3617a14.9356,14.9356,0,0,0-4.9819,6.9413" />
                            <path className={cls.a}
                                  d="M42.8628,8.8328c-3.22,4.1232-7.02,3.97-9.238,6.0893-.5623-.7735-3.7382-2.2353-5.8066-2.7533" />
                            <path className={cls.a} d="M33.6248,14.9221c2.7465,2.3888,3.8029,5.2852,4.7229,7.5513" />
                            <path className={cls.a}
                                  d="M13.6528,40.0464a38.3631,38.3631,0,0,1,.7838-13.0375,27.6777,27.6777,0,0,0,1.6527,6.7437c-.0137-2.5114.1465-4.5322-.075-7.7557h0c1.0461,4.0311,3.38,6.0484,4.57,8.0555a41.7753,41.7753,0,0,1-.4873-13.1533c.6474,7.8545,2.7261,13.2487,6.7811,14.0495.1806-3.4042,1.8878-5.4794,2.249-12.4752.5044,4.4469.9814,8.8938.1125,13.3408a32.7124,32.7124,0,0,0,3.6734-9.555c.4362,2.8215.9405,5.5783,2.2115,7.5649.3987,1.3835.0477,4.2254-.1124,6.3382M21.5653,16.5544A7.8463,7.8463,0,0,0,20.1,20.8991m7.1628-4.1334c1.2574,1.3426,1.66,3.4246,1.8639,5.7077m2.6682-1.4959a10.4873,10.4873,0,0,1,1.1177,5.2817" />
                            <path className={cls.a}
                                  d="M16.5118,22.4052a14.4707,14.4707,0,0,0-.46,4.7536M38.4465,40.0873a39.0627,39.0627,0,0,0-.77-12.6967m-3.3531-1.6425c1.3085,2.692,1.1722,6.2666.9882,8.962M11.0494,28.5628a28.7671,28.7671,0,0,0-.5963,11.4154" />
                            <path className={cls.a} d="M24.3527,28.9751a9.8307,9.8307,0,0,0,2.157,5.52" />
                            <path className={cls.a} d="M8.4051,37.6883l.0375,2.2831" />
                            <path className={cls.a}
                                  d="M40.2457,37.9644l.0546,2.12M16.6651,18.4252a13.2349,13.2349,0,0,0-4.0959,5.5816" />
                            <path className={cls.a}
                                  d="M32.398,17.8288a14.2111,14.2111,0,0,1,3.5712,5.1421M24.6321,18.4626a10.2636,10.2636,0,0,0-.2624,4.2732" />
                            <path className={cls.a}
                                  d="M7.0216,16.5885a4.649,4.649,0,0,0,.1874-2.4331A7.0885,7.0885,0,0,0,8.8174,16.292a4.5251,4.5251,0,0,0-.0136-2.77,4.9236,4.9236,0,0,1,2,2.9953l1.2949-1.4687a4.1084,4.1084,0,0,1-.2045,3.3054m29.38-1.9934a3.6428,3.6428,0,0,1-.3441-2.1571A7.4219,7.4219,0,0,1,39.37,16.4692a5.0431,5.0431,0,0,1-.0784-2.9271,4.8984,4.8984,0,0,0-1.7481,3.1929l-1.1892-1.6663a4.9378,4.9378,0,0,0,.3271,3.6359" />
                            <path className={cls.a}
                                  d="M14.7976,35.9625l-.2907-1.7165c2.7639-.0876,6.77,0,7.316,1.0634.1115,4.4406-4.4087,4.8269-6.5992,2.4493m18.8377-1.8041.2827-1.7165c-2.7639-.0876-6.77,0-7.316,1.0633-.1115,4.4406,4.4127,4.8269,6.5992,2.4493" />
                        </svg>
                    </svg>
                )}
                {edit && (
                    <>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className={cls.input}
                            hidden
                        />
                        <button className={cls.editButton} onClick={handleEditClick}>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
